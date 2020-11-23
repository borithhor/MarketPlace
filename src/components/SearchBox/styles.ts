import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme: any) => ({
  container:{
    paddingBottom: 20,
    paddingTop: 20,
  },
  searchOptionWrapper:{
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,
  },
  searchWrapper:{
    width:'100%',
    position: 'relative',
  },
  searchContent:{
    position: 'absolute',
    width: '100%',
    maxHeight: 300,
    zIndex: 5,
    borderRadius: 10,
    backgroundColor: '#F4F5FA',
  },
  searchNoFound: {
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxOption:{
    cursor: 'pointer',
  },
  optionTextActive:{
    color: '#24B1ED'
  },
  optionBorderActive:{
    color: '#24B1ED',
    cursor: 'pointer',
  },
  searchIcon:{
    color: '#DADADA'
  },
  clearIcon: {
    cursor: 'pointer',
    color: '#DADADA',
    '&:hover':{
      color: '#DC004E',
    }
  },
}));
export default useStyles;
