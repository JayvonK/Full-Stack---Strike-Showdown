import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
import { IPublicUserData } from '@/interfaces/Interfaces'
import React from 'react'


const EditProfileModal = (props: { data: IPublicUserData, handleEditStyleChange: (e: string) => void, handleCloseEditModal: () => void, handleEditUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleEditEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleEditPronounsChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleEditFullNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleEditMainCenterChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleEditAverageChange: (e: string) => void, handleEditEarningsChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleEditHighGameChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleEditHighSeriesChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleEditUserConfirm: (e: React.FormEvent<HTMLFormElement>) => void, handleEditProfileImgChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <div className='p-4'>
      <form onSubmit={props.handleEditUserConfirm}>
        <div className='bg-black py-6 px-10 rounded-lg'>
          <div className='flex w-full flex-col items-center mb-10'>
            <img className='aspect-square w-24 rounded-full mb-2' src={props.data.profileImage} alt="user's profile pic" />
            <input type="file" className='jura text-white w-[105px]' onChange={props.handleEditProfileImgChange} />
          </div>



          <div className='grid grid-cols-2 gap-x-10 gap-y-2'>
            <div>
              <h3 className='jura text-white text-2xl'>Username</h3>
              <input required type="text" value={props.data.username} onChange={props.handleEditUsernameChange} className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-1 rounded-sm" />
            </div>
            <div>
              <h3 className='jura text-white text-2xl'>Full Name</h3>
              <input type="text" value={props.data.fullName === "N/A" ? "" : props.data.fullName} onChange={props.handleEditFullNameChange} placeholder='N/A' className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-1 rounded-sm" />
            </div>
            <div>
              <h3 className='jura text-white text-2xl'>Email</h3>
              <input required type="text" value={props.data.email} onChange={props.handleEditEmailChange} className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-1 rounded-sm" />
            </div>
            <div>
              <h3 className='jura text-white text-2xl'>Pronouns</h3>
              <input type="text" value={props.data.pronouns === "N/A" ? "" : props.data.pronouns} onChange={props.handleEditPronounsChange} placeholder='N/A' className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-1 rounded-sm" />
            </div>
            <div>
              <h3 className='jura text-white text-2xl'>Style</h3>
              <Select value={props.data.style === "N/A" ? "" : props.data.style} onValueChange={props.handleEditStyleChange}>
                <SelectTrigger className="w-full jura text-2xl h-10 bg-white pl-3 mt-1">
                  <SelectValue placeholder="N/A" />
                </SelectTrigger>
                <SelectContent className="jura text-4xl">
                  <SelectItem className='text-2xl' value="1 Handed (Left)">1 Handed (Left)</SelectItem>
                  <SelectItem className='text-2xl' value="2 Handed (Left)">2 Handed (Left)</SelectItem>
                  <SelectItem className='text-2xl' value="1 Handed (Right)">1 Handed (Right)</SelectItem>
                  <SelectItem className='text-2xl' value="2 Handed (Right)">2 Handed (Right)</SelectItem>
                  <SelectItem className='text-2xl' value="1 Handed (Both)">1 Handed (Both)</SelectItem>
                  <SelectItem className='text-2xl' value="2 Handed (Both)">2 Handed (Both)</SelectItem>
                  <SelectItem className='text-2xl' value="Hadouken Style">Hadouken Style</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className='jura text-white text-2xl'>Average</h3>
              <Select value={props.data.average === 'N/A' ? "" : props.data.average} onValueChange={props.handleEditAverageChange}>
                <SelectTrigger className="w-full jura text-2xl h-10 bg-white pl-3 mt-1">
                  <SelectValue placeholder="N/A" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className='text-2xl' value="Under 90">Under 90</SelectItem>
                  <SelectItem className='text-2xl' value="90-100 Avg">90-100 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="100-110 Avg">100-110 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="110-120 Avg">110-120 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="120-130 Avg">120-130 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="130-140 Avg">130-140 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="140-150 Avg">140-150 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="150-160 Avg">150-160 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="160-170 Avg">160-170 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="170-180 Avg">170-180 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="180-190 Avg">180-190 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="190-200 Avg">190-200 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="200-210 Avg">200-210 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="210-220 Avg">210-220 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="220-230 Avg">220-230 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="230-240 Avg">230-240 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="240-250 Avg">240-250 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="250-260 Avg">250-260 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="260-270 Avg">260-270 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="270-280 Avg">270-280 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="280-290 Avg">280-290 Avg</SelectItem>
                  <SelectItem className='text-2xl' value="290-300 Avg">290-300 Avg</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className='jura text-white text-2xl'>Main Center</h3>
              <input value={props.data.mainCenter === "N/A" ? "" : props.data.mainCenter} onChange={props.handleEditMainCenterChange} placeholder='N/A' type="text" className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-1 rounded-sm" />
            </div>
            <div>
              <h3 className='jura text-white text-2xl'>Earnings</h3>
              <input value={props.data.earnings === "N/A" ? "" : props.data.earnings} onChange={props.handleEditEarningsChange} placeholder='N/A' type="text" className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-1 rounded-sm" />
            </div>
            <div>
              <h3 className='jura text-white text-2xl'>High Game</h3>
              <input value={props.data.highGame === "N/A" ? "" : props.data.highGame} onChange={props.handleEditHighGameChange} placeholder='N/A' type="text" className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-1 rounded-sm" />
            </div>
            <div>
              <h3 className='jura text-white text-2xl'>High Series</h3>
              <input value={props.data.highSeries === "N/A" ? "" : props.data.highSeries} onChange={props.handleEditHighSeriesChange} placeholder='N/A' type="text" className="w-full jura text-2xl h-10 bg-white pl-2 mb-2 mt-1 rounded-sm" />
            </div>
          </div>
        </div>

        <div className='p-4 flex justify-end'>
          <button type='submit' className={'jura text-4xl py-2 px-4 rounded-md mr-6 bgOrange'}>Confirm</button>
          <button className={'jura text-4xl py-2 px-4 rounded-md bg-red-500'} onClick={props.handleCloseEditModal} >Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditProfileModal
