import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect,useDispatch } from 'react-redux';
import { fetchSelectedServiceSucceed } from '../actions/actionCreators'

const ServiceItem = ({ item }) => {
  const dispatch = useDispatch()

  // const select = useCallback(() => dispatch(fetchSelectedServiceSucceed(item)), [item, dispatch])

  const select = (e,data) => {
    dispatch(fetchSelectedServiceSucceed(data))
  }

  return (
    <ListItem button onClick={(e)=>select(e,item)} ><ListItemText primary={item.id} /></ListItem>
  );
}
export default connect()(ServiceItem)
