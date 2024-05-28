'use client'

import React, { useEffect, useRef, useState } from 'react'
import MessagingBubbleComponent from './MessagingBubbleComponent'
import { HubConnectionBuilder, LogLevel, HubConnection } from '@microsoft/signalr';
import { Message, JoinChatRoom, SendMessage, IMessage, IPublicUserData, ICreateMessage } from '@/interfaces/Interfaces'
import { GetMessagesFromRoomAPI, JoinChatRoomAPI, SendMessageAPI } from '@/Data/DataServices';

const MessagingPage = (props: { openAddDM: () => void, currentUser: IPublicUserData, dmArray: IPublicUserData[], openChallengeModal: () => void }) => {

  const [conn, setConnection] = useState<HubConnection | null>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [currentFriend, setCurrentFriend] = useState<IPublicUserData>();
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [currentRoom, setCurrentRoom] = useState<string>("");
  const [messagesOpen, setMessagesOpen] = useState<boolean>(false);
  const end = useRef<HTMLDivElement | null>(null);

  const GetMessages = async (room: string) => {
    let messageData = await GetMessagesFromRoomAPI(room);
    setMessages(messageData);
  }

  const joinChatRoom: JoinChatRoom = async (username, chatroom) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("https://strikeshowdownbackend.azurewebsites.net/Chat")
        .configureLogging(LogLevel.Information)
        .build();

      // Set up handlers
      connection.on("JoinSpecificChat", (username: string, msg: string) => {
        GetMessages(chatroom);
        console.log("JoinSpecificChatRoom msg: ", msg);
      });

      connection.on("ReceiveSpecificMessage", (username: string, msg: string) => {
        GetMessages(chatroom);
      });

      connection.onclose(async (error) => {
        if (error) {
          console.error('Connection closed with error: ', error);
        } else {
          console.log('Connection closed.');
          setConnection(null);
          setCurrentRoom("")
        }
        await startConnection(connection);
      });

      await startConnection(connection);

      await connection.invoke("JoinSpecificChat", { username, chatroom });

      setConnection(connection);

      setCurrentRoom(chatroom);
    } catch (e) {
      console.error('Error while joining chat room: ', e);
    }
  };

  const startConnection = async (connection: HubConnection) => {
    try {
      await connection.start();
      console.log("Connected to the server.");
    } catch (e) {
      console.error("Failed to connect: ", e);
      console.log("Retrying in 5 seconds...");
      setTimeout(() => startConnection(connection), 5000);
    }
  };

  const sendMessage: SendMessage = async (message) => {
    try {
      if (conn) {
        let msg: ICreateMessage = {
          userID: props.currentUser.id,
          message: currentMessage,
          chatRoomName: currentRoom
        }
        await SendMessageAPI(msg)
        await conn.invoke("SendMessage", message);
      } else {
        alert("No active connection.");
      }
    } catch (e) {
      console.error('Error while sending message: ', e);
    }
  };

  const disconnect = async () => {

    if (conn !== null) {
      try {
        await conn.stop();
        console.log('Disconnected from chat room');
        setConnection(null); // Clear the connection state
        setCurrentRoom("");
      } catch (e) {
        console.error('Error while disconnecting: ', e);
      }
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(e.target.value);
  }

  const handleOpenMessageClick = async (data: IPublicUserData) => {
    setCurrentFriend(data);
    joinChatRoom(props.currentUser.username, (await JoinChatRoomAPI(props.currentUser.id, data.id)).chatroomName);
    setMessagesOpen(true);
  }

  const handleSendMessage = () => {
    sendMessage(currentMessage);
    setCurrentMessage("");
  }

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  }

  const handleGoBack = () => {
    setMessagesOpen(false)
  }

  useEffect(() => {
    if (end.current) {
      end.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages])



  return (
    <div className='pb-16 grid lg:grid-cols-[31%_69%] h-[80vh] z-20 relative '>

      <div className='bg-black rounded-3xl px-7 py-7 overflow-y-scroll scrollbar lg:block hidden'>

        <div className='flex justify-between items-center mb-7'>
          <h2 className='2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-3xl text-2xl juraBold text-white'>Messages</h2>
          <div className='w-[45px] h-[45px]'>
            <img className='w-full h-full object-cover hover:cursor-pointer' src='/images/plus-bold.svg' alt="" onClick={props.openAddDM} />
          </div>
        </div>

        <hr className='border-white mb-8' />

        {
          props.dmArray.map((friend, idx) => (

            <div key={idx}>
              <div className='flex justify-between items-center hover:brightness-125 hover:cursor-pointer' onClick={() => handleOpenMessageClick(friend)}>
                <div className='flex items-center'>
                  <div>
                    <div className='2xl:w-[72px] 2xl:h-[72px] w-16 h-16'>
                      <img className='w-full h-full object-cover rounded-full' src={friend.profileImage} alt="" />
                    </div>
                  </div>
                  <div className='ml-4 mr-2'>
                    <h3 className='juraBold xl:text-2xl lg:text-xl sm:text-2xl text-xl text-white break-words'>{friend.username}</h3>
                    <h5 className='jura xl:text-xl lg:text-lg sm:text-xl text-lg text-gray-300'>{friend.pronouns}</h5>
                  </div>
                </div>
              </div>

              <hr className='border-white my-8' />
            </div>

          ))
        }

        {
          props.dmArray.length === 0 ? (
            <div>

            </div>
          ) : (<></>)
        }

      </div>


      {/* Tablet Responsiveness Below */}

      {
        !messagesOpen ? (
          <div className='bg-black rounded-3xl px-7 py-7 overflow-y-scroll scrollbar lg:hidden block'>

            <div className='flex justify-between items-center mb-7'>
              <h2 className='2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-3xl text-2xl juraBold text-white'>Messages</h2>
              <div className='w-[45px] h-[45px]'>
                <img className='w-full h-full object-cover hover:cursor-pointer' src='/images/plus-bold.svg' alt="" onClick={props.openAddDM} />
              </div>
            </div>

            <hr className='border-white mb-8' />

            {
              props.dmArray.map((friend, idx) => (

                <div key={idx}>
                  <div className='flex justify-between items-center hover:brightness-125 hover:cursor-pointer' onClick={() => handleOpenMessageClick(friend)}>
                    <div className='flex items-center'>
                      <div>
                        <div className='2xl:w-[72px] 2xl:h-[72px] w-16 h-16'>
                          <img className='w-full h-full object-cover rounded-full' src={friend.profileImage} alt="" />
                        </div>
                      </div>
                      <div className='ml-4 mr-2'>
                        <h3 className='juraBold xl:text-2xl lg:text-xl sm:text-2xl text-xl text-white break-words'>{friend.username}</h3>
                        <h5 className='jura xl:text-xl lg:text-lg sm:text-xl text-lg text-gray-300'>{friend.pronouns}</h5>
                      </div>
                    </div>
                  </div>

                  <hr className='border-white my-8' />
                </div>

              ))
            }

            {
              props.dmArray.length === 0 ? (
                <div>

                </div>
              ) : (<></>)
            }

          </div>
        ) : (<></>)
      }

      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


      <div className='bg-black lg:rounded-3xl rounded-xl lg:ml-4 lg:py-7 lg:px-10 py-4 px-4 relative lg:flex hidden flex-col justify-between max-h-[80vh]'>

        {
          conn === null ? (
            <h2 className='text-white jura text-4xl text-center my-auto'>Add/Open a DM to start messaging</h2>
          ) : (
            <>
              <div>

                <div className='flex lg:justify-between justify-center relative'>

                  <div className='flex lg:flex-row flex-col items-center'>
                    <div>
                      <div className='sm:w-[72px] sm:h-[72px] w-12 h-12'>
                        <img className='w-full h-full object-cover rounded-full' src={currentFriend?.profileImage} alt="profile picture" />
                      </div>
                    </div>
                    <div className='lg:ml-6 2xl:max-w-full xl:max-w-80 max-w-60'>
                      <h3 className='juraBold xl:text-3xl text-2xl text-white break-words lg:block hidden'>{currentFriend?.username}</h3>
                      <h5 className='jura text-xl text-gray-300 lg:block hidden'> {currentFriend?.pronouns}</h5>
                      <h3 className='jura sm:text-xl text-lg text-white break-words mt-1 lg:hidden'>{currentFriend?.username}</h3>
                    </div>
                  </div>

                  <div className='lg:flex items-start hidden'>
                    <button className='px-5 py-5 xl:text-2xl text-xl text-black juraBold bg-[#FF7A00] rounded-3xl' onClick={props.openChallengeModal}>Challenge</button>
                  </div>

                  <img className='lg:hidden absolute -left-2 top-4 sm:h-16 h-12' src="/images/caret-left-bold.svg" alt="" onClick={handleGoBack} />
                </div>

                <hr className='border-white mt-4' />

              </div>



              <div className='h-full py-5 overflow-auto scrollbar'>
                {
                  messages.map((msg, idx) => {
                    return (
                      <MessagingBubbleComponent key={idx} isSender={props.currentUser.id === msg.userID} content={msg.message} />
                    )
                  })
                }

                <div ref={end} />

              </div>


              <div className='flex bg-white py-1 rounded-xl items-center pr-5'>
                <input className='w-full bg-transparent sm:text-2xl text-lg jura placeholder:text-black focus:outline-none pl-4 pr-3 ' placeholder='Send A Message' value={currentMessage} onKeyDown={(e) => handleKeydown(e)} onChange={(e) => handleOnChange(e)} maxLength={100} />
                <div className='lg:w-12 lg:h-12 sm:w-10 sm:h-10 h-8 w-8'>
                  <img className='w-full h-full hover:cursor-pointer hover:brightness-125' src='/images/paper-plane-tilt-fill.svg' alt="" onClick={handleSendMessage} />
                </div>
              </div>
            </>
          )
        }

      </div>


      {/* Tablet Responsiveness below */}

      {
        messagesOpen ? (
          <div className='bg-black lg:rounded-3xl rounded-xl lg:ml-4 lg:py-7 lg:px-10 py-4 px-4 relative lg:hidden flex flex-col justify-between max-h-[80vh] max-w-[90vw]'>

            {
              conn === null ? (
                <h2 className='text-white jura text-4xl text-center my-auto'>Add/Open a DM to start messaging</h2>
              ) : (
                <>
                  <div>

                    <div className='flex lg:justify-between justify-center relative'>

                      <div className='flex lg:flex-row flex-col items-center'>
                        <div>
                          <div className='sm:w-[72px] sm:h-[72px] w-12 h-12'>
                            <img className='w-full h-full object-cover rounded-full' src={currentFriend?.profileImage} alt="profile picture" />
                          </div>
                        </div>
                        <div className='lg:ml-6 2xl:max-w-full xl:max-w-80 max-w-60'>
                          <h3 className='juraBold xl:text-3xl text-2xl text-white break-words lg:block hidden'>{currentFriend?.username}</h3>
                          <h5 className='jura text-xl text-gray-300 lg:block hidden'> {currentFriend?.pronouns}</h5>
                          <h3 className='jura sm:text-xl text-lg text-white break-words mt-1 lg:hidden'>{currentFriend?.username}</h3>
                        </div>
                      </div>

                      <div className='lg:flex items-start hidden'>
                        <button className='px-5 py-5 xl:text-2xl text-xl text-black juraBold bg-[#FF7A00] rounded-3xl' onClick={props.openChallengeModal}>Challenge</button>
                      </div>

                      <img className='lg:hidden absolute -left-2 top-4 sm:h-16 h-12' src="/images/caret-left-bold.svg" alt="" onClick={handleGoBack} />
                    </div>

                    <hr className='border-white mt-4' />

                  </div>



                  <div className='h-full py-5 overflow-auto scrollbar'>
                    {
                      messages.map((msg, idx) => {
                        return (
                          <MessagingBubbleComponent key={idx} isSender={props.currentUser.id === msg.userID} content={msg.message} />
                        )
                      })
                    }

                    <div ref={end} />

                  </div>


                  <div className='flex bg-white py-1 rounded-xl items-center pr-5'>
                    <input className='w-full bg-transparent sm:text-2xl text-lg jura placeholder:text-black focus:outline-none pl-4 pr-3 ' placeholder='Send A Message' value={currentMessage} onKeyDown={(e) => handleKeydown(e)} onChange={(e) => handleOnChange(e)} maxLength={100} />
                    <div className='lg:w-12 lg:h-12 sm:w-10 sm:h-10 h-8 w-8'>
                      <img className='w-full h-full hover:cursor-pointer hover:brightness-125' src='/images/paper-plane-tilt-fill.svg' alt="" onClick={handleSendMessage} />
                    </div>
                  </div>
                </>
              )
            }

          </div>
        ) : (<></>)
      }

    </div >
  )
}

export default MessagingPage
