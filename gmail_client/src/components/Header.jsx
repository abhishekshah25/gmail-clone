import {AppBar, Toolbar,Box, InputBase, styled} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {gmailLogo} from '../constants/constant';

const StyledAppBar = styled(AppBar)({
  background: '#f5F5F5',
  boxShadow: 'none'
})

const SearchWrapper = styled(Box)({
  background: '#EAF1FB',
  marginLeft: 80,
  borderRadius: 8,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
  '& > div': {
    width: '100%',
    padding: '0 10px'
  }
})

const OptionsWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  '& > svg': {
    marginLeft: 20,
  }
})

const Header = ({toggleDrawer}) => {
  return(
    <StyledAppBar position='static'>
      <Toolbar>
        <MenuIcon color='action' onClick={toggleDrawer}/>
        <img src= {gmailLogo} alt='Logo' style={{width: 115, marginLeft: 15}}/>
        <SearchWrapper>
          <SearchIcon color='action'/>
          <InputBase 
          placeholder='Search Mail'
          />
          <TuneIcon color='action' />
        </SearchWrapper>
        <OptionsWrapper>
          <HelpOutlineIcon color='action'/>
          <SettingsOutlinedIcon color='action'/>
          <AppsOutlinedIcon color='action'/>
          <AccountCircleOutlinedIcon color='action'/>
        </OptionsWrapper>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Header;




