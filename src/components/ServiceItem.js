import React from 'react';
import { connect,useDispatch } from 'react-redux';
import { fetchSelectedServiceSucceed } from '../actions/actionCreators'

const ServiceItem = ({ item }) => {
  const dispatch = useDispatch()

  const onClickHandler = (e,data) => {
    dispatch(fetchSelectedServiceSucceed(data.id))
  }

  return (
    <li id={item.id} onClick={(e)=>onClickHandler(e,item)} >{item.id}</li>
  );
}
export default connect()(ServiceItem)
