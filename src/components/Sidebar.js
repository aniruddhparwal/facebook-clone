import { Chat, EmojiEmotions, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons'
import React from 'react'
import SidebarRow from './SidebarRow'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://avatars2.githubusercontent.com/u/34189674?s=60&v=4" title="Aniruddh Parwal" />
            <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiEmotions} title="Pages" />
            <SidebarRow Icon={People} title="Friends" />
            <SidebarRow Icon={Chat} title="Messenger" />
            <SidebarRow Icon={Storefront} title="Marketplace" />
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
        </div>
    )
}

export default Sidebar
