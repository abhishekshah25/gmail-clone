import Dialog from '@mui/material/Dialog';
import { Box, Typography, InputBase, TextField, styled, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useState } from 'react';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';

const dialogStyle = {
  height: '90%',
  width: '80%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  borderRadius: '10px 10px 0 0',
};

const Header = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 15px',
  background: '#f2f6fc',
  '& > p': {
    fontSize: 14,
    fontWeight: 500
  }
});

const RecipientsWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 15px',
  '& > div': {
    fontSize: 14,
    borderBottom: '1px solid #F5F5F5',
    marginTop: 10 
  }
});

const Footer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding:'10px 15px'
});

const SendButton = styled(Button)({
  background: '#0B57D0',
  color:'#fff',
  fontWeight: 500,
  textTransform: 'none',
  borderRadius: 18,
  width: 100
});

const ComposeMail = ({open, setOpenDrawer}) => {

  const [data,setData] = useState({});
  const sentEmailService = useApi(API_URLS.saveSentEmail);
  const saveDraftService = useApi(API_URLS.saveDraftEmails);

  const config = {
    Host : "smtp.elasticemail.com",
    Username : "soulcas@yopmail.com",
    Password : "ADB497DC6A8F6EBF138A60C5C1A6983261BF",
    Port: 2525,
  }

  const sendMail = async(e) => {
    e.preventDefault();

    if(window.Email){
      window.Email.send({
        ...config,
        To : data.to,
        From : "abhishekshah137@gmail.com",
        Subject : data.subject,
        Body : data.body
      }).then(
        message => alert(message)
      );
    }

    const payload = {
      to: data.to,
      from: "abhishekshah137@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: '',
      name: 'Smudgy',
      starred: false,
      type: 'sent'
    }

    sentEmailService.call(payload);

    if(!sentEmailService.error){
      setOpenDrawer(false);
      setData({});
    }
  }

  const onValueChange = (e) => {
    setData({...data,[e.target.name]:e.target.value});
  }  

  const closeComposeMail = (e) => {
    e.preventDefault();

    const payload = {
      to: data.to,
      from: "abhishekshah137@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: '',
      name: 'Smudgy',
      starred: false,
      type: 'drafts'
    }

    saveDraftService.call(payload);

    if(!saveDraftService.error){
      setOpenDrawer(false);
      setData({});
    }
  }

  return (
    <Dialog
    open = {open}
    PaperProps={{sx: dialogStyle}}
    >
      <Header>
        <Typography>New Message</Typography>
        <CloseIcon fontSize='small' onClick={(e)=> closeComposeMail(e)}/>
      </Header>
      <RecipientsWrapper>
        <InputBase placeholder='Recipients' name='to' onChange={(e)=> onValueChange(e)} value={data.to}/>
        <InputBase placeholder='Subject' name='subject' onChange={(e)=> onValueChange(e)} value={data.subject}/>
      </RecipientsWrapper>
      <TextField
      multiline
      rows={20} 
      sx = {{'& .MuiOutlinedInput-notchedOutline': {border: 'none'}}}
      onChange={(e)=> onValueChange(e)}
      value={data.body}
      name = 'body'
      />
      <Footer>
        <SendButton onClick={(e)=> sendMail(e)}>Send</SendButton>
        <DeleteOutlinedIcon onClick={()=> setOpenDrawer(false)}/>
      </Footer>
    </Dialog>
  )
}

export default ComposeMail;

