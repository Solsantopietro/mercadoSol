import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { createMuiTheme } from '@material-ui/core/styles';

const themeCreate = createMuiTheme({
  palette: {
    primary: {
      light: '#fbc749',
      main: '#FAB91C',
      dark: '#af8113',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fab950',
      main: '#f9a825',
      dark: '#ae7519',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((themeCreate) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: themeCreate.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [themeCreate.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: themeCreate.shape.borderRadius,
    backgroundColor: fade(themeCreate.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(themeCreate.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [themeCreate.breakpoints.up('sm')]: {
      marginLeft: themeCreate.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: themeCreate.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: themeCreate.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${themeCreate.spacing(4)}px)`,
    transition: themeCreate.transitions.create('width'),
    width: '100%',
    [themeCreate.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = ({click, handleSearchText }) => {

  const [valorDelInput, setValorDelInput] = useState('')

  const handleChangeSearch = (e) =>{
    setValorDelInput(e.target.value)
    handleSearchText(e)
  }

  const handleSubmit = (e) => {
    handleChangeSearch(e)
    e.preventDefault(e)
    
  }
  
    const classes = useStyles();
    return (
    <div className={ click === 0 ? "hidden" : "Header"}>

    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Mercado Sol
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form>
              <InputBase
              value={valorDelInput}
                onChange={handleChangeSearch}
                placeholder="Buscar producto"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
              <input type="submit" onClick={handleSubmit} className="hidden"/>

            </form>
          </div>
        </Toolbar>
      </AppBar>
    </div>

</div>

);
}

export default Header;