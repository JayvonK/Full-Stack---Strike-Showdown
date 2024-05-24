import React, { useState } from 'react'
import { IPublicUserData, IUserPosts } from '@/interfaces/Interfaces'
import SearchModalRecentUsersComponent from './SearchModalRecentUsersComponent'

const SearchModal = (props: { closeModal: () => void, userArr: IPublicUserData[], clickSearch: (data: IPublicUserData) => void, currentUsername: string }) => {

  const [recSearch, setRecSearch] = useState<boolean>(false);
  const [searchedUsername, setSearchedUsername] = useState<string>('');


  return (
    <div>
      <div className='bg-white rounded-lg max-h-[750px] overflow-auto '>
        <input type="text" placeholder='Search For User' className='bg-transparent jura lg:text-3xl text-2xl w-full pl-6 py-2 relative' onFocus={() => setRecSearch(true)} onChange={(e) => setSearchedUsername(e.target.value)} />

        <>
          {
            recSearch && props.userArr.map((user, idx) => {
              if (props.userArr.length > 5) {
                if (idx > props.userArr.length - 6) {
                  if (user.username !== props.currentUsername) {
                    if (searchedUsername.trim() === '') {
                      return (
                        idx === props.userArr.length - 5 ? (<SearchModalRecentUsersComponent key={idx} username={user.username} avg={user.average} wins={user.wins} losses={user.losses} pfp={user.profileImage} last={true} viewUser={() => { props.clickSearch(user) }} />) : (<SearchModalRecentUsersComponent key={idx} username={user.username} avg={user.average} wins={user.wins} losses={user.losses} pfp={user.profileImage} last={false} viewUser={() => { props.clickSearch(user) }} />)
                      )
                    } else if (user.username.toLowerCase().includes(searchedUsername.toLowerCase())) {
                      return (
                        idx === props.userArr.length - 5 ? (<SearchModalRecentUsersComponent key={idx} username={user.username} avg={user.average} wins={user.wins} losses={user.losses} pfp={user.profileImage} last={true} viewUser={() => { props.clickSearch(user) }} />) : (<SearchModalRecentUsersComponent key={idx} username={user.username} avg={user.average} wins={user.wins} losses={user.losses} pfp={user.profileImage} last={false} viewUser={() => { props.clickSearch(user) }} />)
                      )
                    }
                  }
                }
              } else {
                if (user.username !== props.currentUsername) {
                  if (searchedUsername.trim() === '') {
                    return (
                      idx === 0 ? (<SearchModalRecentUsersComponent key={idx} username={user.username} avg={user.average} wins={user.wins} losses={user.losses} pfp={user.profileImage} last={true} viewUser={() => { props.clickSearch(user) }} />) : (<SearchModalRecentUsersComponent key={idx} username={user.username} avg={user.average} wins={user.wins} losses={user.losses} pfp={user.profileImage} last={false} viewUser={() => { props.clickSearch(user) }} />)
                    )
                  } else if (user.username.toLowerCase().includes(searchedUsername.toLowerCase())) {
                    return (
                      idx === 0 ? (<SearchModalRecentUsersComponent key={idx} username={user.username} avg={user.average} wins={user.wins} losses={user.losses} pfp={user.profileImage} last={true} viewUser={() => { props.clickSearch(user) }} />) : (<SearchModalRecentUsersComponent key={idx} username={user.username} avg={user.average} wins={user.wins} losses={user.losses} pfp={user.profileImage} last={false} viewUser={() => { props.clickSearch(user) }} />)
                    )
                  }
                }
              }
            }).reverse()
          }
        </>

      </div>

      <div className='pt-4 flex justify-end'>
        <button className={'jura lg:text-3xl text-2xl py-2 px-4 rounded-md bgOrange'} onClick={props.closeModal}>Close</button>
      </div>
    </div>
  )
}

export default SearchModal
