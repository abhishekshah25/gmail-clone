import routes from "../routes/routes.js";
import PhotoIcon from '@mui/icons-material/Photo';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export const SIDEBAR_DATA = [
{
    name: 'inbox',
    title: 'Inbox',
    icon: PhotoIcon,
    path: routes.emails.path
},
{
    name: 'starred',
    title: 'Starred',
    icon: StarOutlineIcon,
    path: routes.emails.path
},
{
    name: 'sent',
    title: 'Sent',
    icon: SendOutlinedIcon,
    path: routes.emails.path
},
{
    name: 'drafts',
    title: 'Drafts',
    icon: InsertDriveFileOutlinedIcon,
    path: routes.emails.path
},
{
    name: 'bin',
    title: 'Bin',
    icon: DeleteOutlinedIcon,
    path: routes.emails.path
},
{
    name: 'allmail',
    title: 'All Mail',
    icon: MailOutlinedIcon,
    path: routes.emails.path      
}
];