import React, { useEffect, useState,useMemo } from 'react';
import ProfileCard from './ProviderCards';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useAxios from '../api/useAxios';
import { connect,useDispatch } from 'react-redux';
import { fetchProviderSuccess } from '../actions/actionCreators';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',

    },
    item: {
        padding: '10px',
        [theme.breakpoints.up('sm')]: {
            flexBasis: '50%'
        },
        [theme.breakpoints.down('sm')]: {
            flexBasis: '100%'
        },
        [theme.breakpoints.up('lg')]: {
            flexBasis: '33.33%'
        },
    }
}));

const Providers = ({providers,selectedService}) => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [Provider, setProvider] = useState([])

    const filteredProfiles = useMemo(() => {
        debugger;
        if (selectedService?.selectedServices?.length <= 0) {
          return providers?.providers?.data;
        }
    
        return providers?.providers?.data?.filter(profile => {
          const { subspecialties = [] } = profile.attributes;
    
          return subspecialties.includes(selectedService);
        })
      }, [providers, selectedService]);

    const { response, loading, error } = useAxios({
        method: 'get',
        url: '/providers',
    });

    useEffect(() => {
        if (response !== null) {
           dispatch(fetchProviderSuccess(response))
        }
    }, [response]);

    useEffect(()=>{
        setProvider(providers.providers)
    },[providers])

    return (
        <div className={classes.root}>
            {filteredProfiles?.map(profile => (
                    <div key={profile.id} className={classes.item}>
                        <ProfileCard
                            src={profile.attributes['card-image']}
                            title={profile.attributes.name}
                            subSpecialties={profile.attributes.subspecialties.join(', ')}
                        />
                    </div>
                ))}
        </div>
    )
}

const mapStateToProps = state => ({
    providers : state.ProviderList,
    selectedService : state.SelectedService
  })

export default connect(mapStateToProps)(Providers)
