import React from 'react'

import './style.scss'
const Profile = ({name, location, workexp, education, email}) => (
    <section className='profile-container'>
        <div className='profile-image'></div>
        <div className='profile-info'>
            <div className='profile-info-name'>{name}</div>
            <div className='profile-info_group'><div className='profile-info_icon'><ion-icon name="navigate-circle"></ion-icon></div><div className='profile-info_detail'>{location}</div></div>
            <div className='profile-info_group'><div className='profile-info_icon'><ion-icon name="business"></ion-icon></div><div className='profile-info_detail'>{workexp}</div></div>
            <div className='profile-info_group'><div className='profile-info_icon'><ion-icon name="school"></ion-icon></div><div className='profile-info_detail'>{education}</div></div>
            <div className='profile-info_group'><div className='profile-info_icon'><ion-icon name="mail"></ion-icon></div><div className='profile-info_detail'>{email}</div></div>
        </div>
    </section>
)

export default Profile;