import React, { useEffect,useState } from 'react';

const Profile = () => {

    const[userdata,setuserdata]=useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
                const data = await response.json();
               
                if(data){
                    setuserdata(
                        {
                            firstname:data.results[0]?.name?.first,
                            lastname:data.results[0]?.name?.last,
                            phone:data.results[0]?.phone,
                            gender:data.results[0]?.gender,
                            picture:data.results[0]?.picture?.large
                        }
                    );
                   
                }
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }, []);


    return (
        <div className='rounded-md bg-custom-color border-2 m-5 overflow-hidden '>
          {userdata &&
          <div className='flex flex-row m-10 gap-10 rounded-md border-black'> 
             <div>
            {userdata?.picture&& <img src={userdata.picture} alt="profilepicture" className='md:w-96 w-60  sm:min-w-fit min-w-[40px]  '/>}  
            </div>
                <div className='flex flex-col items-start lg:text-7xl md:text-4xl  sm:text-2xl gap-2 vs:text-base h-full flex-shrink-0 text-gray-900 mr-2'>
                    <h1>{userdata?.firstname}  {userdata?.lastname}</h1>
                     <p>{userdata?.gender}</p> 
                     <p>{userdata?.phone}</p>   
                </div>
                </div>
          } 
        </div>
    );
}

export default Profile;
