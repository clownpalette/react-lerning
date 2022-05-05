import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCardIcon from '@mui/icons-material/AddCard';
import UploadIcon from '@mui/icons-material/Upload'; 
import SettingsIcon from '@mui/icons-material/Settings';


export const SidebarData = [
    {
        title: "ホーム",
        icon: <HomeIcon />,
        link: "/home",
    },
    {
        title: "メール",
        icon: <EmailIcon />,
        link: "/mail",
    },    
    {
        title: "アナリティクス",
        icon: <AnalyticsIcon />,
        link: "/analytics",
    },
    {
        title: "友達追加",
        icon: <PersonAddIcon />,
        link: "/personadd",
    },
    {
        title: "お支払い追加",
        icon: <AddCardIcon />,
        link: "/addcard",
    },
    {
        title: "アップロード",
        icon: <UploadIcon />,
        link: "/upload",
    },
    {
        title: "詳細設定",
        icon: <SettingsIcon />,
        link: "/settings",
    }
]