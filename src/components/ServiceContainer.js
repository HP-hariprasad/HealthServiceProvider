import React, { useState, useEffect } from 'react';
import ServiceItem from './ServiceItem';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect,useDispatch } from 'react-redux';
import useAxios from '../api/useAxios';
import { fetchServicesSuccess } from '../actions/actionCreators';


const useStyles = makeStyles({
    list: {
        listStyleType: 'none',
        cursor: 'pointer'
    }
})


const ServiceContainer = ({services}) => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const [Service, setService] = useState([])

    const { response, loading, error } = useAxios({
        method: 'get',
        url: '/services',
    });

    useEffect(() => {
        if (response !== null) {
           dispatch(fetchServicesSuccess(response))
        }
    }, [response]);

    useEffect(()=>{
        setService(services.services)
    },[services])

    return (
        <div>
            {Service?.data?.map((item) => {
                return <ul className={classes.list}>{<ServiceItem item={item} />}</ul>
            })}
        </div>
    );
}

const mapStateToProps = state => ({
    services : state.Services
  })


export default connect(mapStateToProps)(ServiceContainer)
