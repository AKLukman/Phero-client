import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';





const Profiles = () => {

    const [sellerProfile, setSellerProfile] = useState([]);
    const [searchText, setSearchText] = useState('');

    // useEffect(() => {
    //     fetch('http://localhost:5000/sellerProfile')
    //         .then(res => res.json())
    //         .then(data => setSellerProfile(data))
    // }, [])

    // console.log(searchText)


    useEffect(() => {
        fetch(`http://localhost:5000/sellerProfile?speciality=${searchText}`)
            .then(res => res.json())
            .then(data => setSellerProfile(data))
    }, [searchText])
    const handleSearchField = e => {
        const searchValue = e.target.value;
        setSearchText(searchValue);
    }

    return (
        <div>
            <Navigation></Navigation>

            <input style={{ marginLeft: '177px', marginBottom: '30px', marginTop: '30px' }} onChange={handleSearchField} type="text" className="form-control w-75 " placeholder="Search developer" />
            <div className="container-fluid">
                <div className="row">
                    {
                        sellerProfile.map(seller => <Profile
                            key={seller._id}
                            seller={seller}

                        ></Profile>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Profiles;