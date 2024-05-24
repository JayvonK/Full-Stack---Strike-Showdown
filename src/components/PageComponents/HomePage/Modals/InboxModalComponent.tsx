'use client'

import { useEffect, useState } from "react";
import React from "react";
import { INotification, IUserPosts } from "@/interfaces/Interfaces";
import MessageNotificationComponent from "../Notifications/MessageNotificationComponent";
import MatchNotificationComponent from "../Notifications/MatchNotificationComponent";
import { GetMatchByPostIDAPI, MakeNotificationRead } from "@/Data/DataServices";
import FriendRequestNotificationComponent from "../Notifications/FriendRequestNotificationComponent";
const InboxModalComponent = (props: { closeModal: () => void, openFriendsModal: () => void, notifications: INotification[], errorToast: () => void, acceptFriend: (id: number, noti: INotification | undefined) => void, declineFriend: (id: number, noti: INotification | undefined) => void, editMatchClick: (id: number) => void, currentUsersPosts: IUserPosts[], viewMatchFromInbox: (postID: number) => void }) => {

  const [activeTab, setActiveTab] = useState("Inbox");
  const [tabOneActive, setTabOneActive] = useState(true);
  const [tabTwoActive, setTabTwoActive] = useState(false);
  const [tabThreeActive, setTabThreeActive] = useState(false);

  const [matchesUnread, setMatchesUnread] = useState(false);
  const [sessionsUnread, setSessionsUnread] = useState(false);

  const handleTabChange = (tab: any) => {
    if (tab == "Inbox") {
      setTabOneActive(true);
      setTabTwoActive(false);
      setTabThreeActive(false);
    } else if (tab == "Matches") {
      setTabOneActive(false);
      setTabTwoActive(true);
      setTabThreeActive(false);
    } else {
      setTabOneActive(false);
      setTabTwoActive(false);
      setTabThreeActive(true);
    }
    setActiveTab(tab);
  };

  const matchesClick = async () => {
    handleTabChange("Matches");
    props.notifications.forEach(async (noti, idx) => {
      if (noti.type.includes("Challenge") && noti.isRead === false) {
        await MakeNotificationRead(noti)
      }
    })
    setMatchesUnread(false);
  }

  const inboxClick = () => {
    handleTabChange("Inbox");
  }

  const sessionsClick = async () => {
    handleTabChange("Sessions");
    props.notifications.forEach(async (noti, idx) => {
      if (noti.type.includes("Session") && noti.isRead === false) {
        await MakeNotificationRead(noti)
      }
    })
    setSessionsUnread(false);
  }

  useEffect(() => {
    const notiRead = async (noti: INotification) => {
      await MakeNotificationRead(noti)
    }

    props.notifications.forEach(noti => {
      if (noti.type.includes("Inbox") && noti.isRead === false) {
        notiRead(noti)
      }
    })

    props.notifications.forEach(noti => {
      if (noti.type.includes("Challenge") && noti.isRead === false) {
        setMatchesUnread(true);
      }
    })

    props.notifications.forEach(noti => {
      if (noti.type.includes("Session") && noti.isRead === false) {
        setSessionsUnread(true);
      }
    })
  }, [])
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-evenly mb-4">
        <button className={`tab-button relative px-4 w-48 py-2 rounded focus:outline-none jura text-xl md:text-2xl lg:text-3xl ${activeTab === "Inbox" ? "bg-orange-500 " : "text-black"}`} onClick={inboxClick}> Inbox </button>

        <button className={`tab-button relative px-4 py-2 w-48 rounded focus:outline-none jura text-xl md:text-2xl lg:text-3xl ${activeTab === "Matches" ? "bg-orange-500 " : " text-black "}`} onClick={matchesClick}> Matches {matchesUnread && <div className="absolute bg-red-600 w-4 h-4 rounded-full top-2 right-2"></div>} </button>

        <button className={`tab-button relative px-4 py-2 w-48 rounded focus:outline-none jura text-xl md:text-2xl lg:text-3xl ${activeTab === "Sessions" ? "bg-orange-500  " : " text-black"}`} onClick={sessionsClick}> Sessions {sessionsUnread && <div className="absolute bg-red-600 w-4 h-4 rounded-full top-2 right-2"></div>} </button>
      </div>

      <div className=" min-h-[500px] max-h-[600px] overflow-auto">
        {tabOneActive && props.notifications.map((noti, idx) => {
          if (noti.type.includes("Inbox")) {
            if (noti.type.includes("Message")) {
              return (<MessageNotificationComponent data={noti} key={idx} />)
            } else if (noti.type.includes("FriendRequest")) {
              return <FriendRequestNotificationComponent data={noti} key={idx} accept={props.acceptFriend} decline={props.declineFriend} />
            }
          }
        }).reverse()
        }

        {tabTwoActive && props.notifications.map((noti, idx) => {
          if (noti.type.includes("Challenge")) {
            if (noti.type.includes("Deleted")) {
              return (<MessageNotificationComponent data={noti} key={idx} />)
            } else if (noti.type.includes("Publisher")) {
              return (<MatchNotificationComponent data={noti} key={idx} editMatchClick={() => props.editMatchClick(noti.postID)} viewMatchClick={() => props.viewMatchFromInbox(noti.postID)} edit={true} />)
            } else if (noti.type.includes("Viewer")) {
              return (<MatchNotificationComponent data={noti} key={idx} editMatchClick={() => props.editMatchClick(noti.postID)} viewMatchClick={() => props.viewMatchFromInbox(noti.postID)} edit={false} />)
            } else if (noti.type.includes("Edited")) {
              return (<MatchNotificationComponent data={noti} key={idx} editMatchClick={() => props.editMatchClick(noti.postID)} viewMatchClick={() => props.viewMatchFromInbox(noti.postID)} edit={true} />)
            }
          }
        }).reverse()
        }

        {tabThreeActive && props.notifications.map((noti, idx) => {
          if (noti.type.includes("Session")) {

            if (noti.type.includes("Deleted")) {
              return (<MessageNotificationComponent data={noti} key={idx} />)
            } else if (noti.type.includes("Publisher")) {
              return (<MatchNotificationComponent data={noti} key={idx} editMatchClick={() => props.editMatchClick(noti.postID)} viewMatchClick={() => props.viewMatchFromInbox(noti.postID)} edit={true} />)
            } else if (noti.type.includes("Viewer")) {
              return (<MatchNotificationComponent data={noti} key={idx} editMatchClick={() => props.editMatchClick(noti.postID)} viewMatchClick={() => props.viewMatchFromInbox(noti.postID)} edit={false} />)
            } else if (noti.type.includes("Edited")) {
              return (<MatchNotificationComponent data={noti} key={idx} editMatchClick={() => props.editMatchClick(noti.postID)} viewMatchClick={() => props.viewMatchFromInbox(noti.postID)} edit={true} />)
            }
          }
        }).reverse()
        }

      </div>

      <div className="flex justify-end pt-4">
        <button className=" border-color focus:outline-none h-10 md:h-12 lg:h-14  mt-3 bg-orange-500  w-20 md:w-36 rounded-md   hover:!bg-orange-500 text-black jura" onClick={props.closeModal}>
          <h3 className=" text-xl md:text-2xl lg:text-3xl ">Close</h3>
        </button>
      </div>
    </div>
  );
};

export default InboxModalComponent;
