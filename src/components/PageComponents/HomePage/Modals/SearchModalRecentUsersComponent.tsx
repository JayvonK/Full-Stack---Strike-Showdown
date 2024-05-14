import React from 'react'

const SearchModalRecentUsersComponent = (props: {username: string, avg: string, wins: number, losses: number, pfp: string, last: boolean, viewUser: () => void }) => {
    return (
        <div className={ props.last ? 'bg-black rounded-bl-lg rounded-br-lg px-6 py-3 flex justify-between hover:bg-slate-900 hover:cursor-pointer' : 'bg-black px-6 py-3 flex justify-between hover:bg-slate-900 hover:cursor-pointer'} onClick={props.viewUser}>
            <div className='flex'>
                <img className='aspect-square w-20 rounded-full mr-6' src={props.pfp} alt="" />
                <div>
                    <h1 className='text-white juraBold text-3xl'>{props.username}</h1>
                    <p className='text-white jura mt-2 text-xl'>Record: <span className='txtOrange'>{props.wins} - {props.losses}</span>&nbsp; &nbsp; &nbsp; Average: <span className='txtOrange'>{props.avg}</span> </p>
                </div>
            </div>
        </div>
    )
}

export default SearchModalRecentUsersComponent
