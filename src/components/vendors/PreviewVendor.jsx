import  { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from 'axios';

const API_URL = import.meta.env.VITE_URL;

const PreviewVendor = () => {
  const { ID } = useParams();  // Get vendor ID from URL params
  const navigate = useNavigate();
  const [vendor, setVendor] = useState(null);

  // Fetch vendor details based on ID
  const GetVendorDetails = async () => {
    try {
        const res = await axios.get(`${API_URL}/admin/vendor/${ID}`);  // Set the vendor data into state
        console.log("vendor details",res.data)
      setVendor(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetVendorDetails();
  }, [ID]);  // Re-fetch the vendor details when ID changes

  return (
    <>
      <div className="relative mt-8 h-[300px] w-full overflow-hidden rounded-xl bg-cover  bg-center" style={{
         backgroundImage: `url(${vendor?.Img || "/img/default-background.png"})`,
      }} >
        <div className="absolute inset-0 h-full w-full " />
      </div>

      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100 shadow-lg">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={vendor?.Img || "/img/default-avatar.png"}
                alt={vendor?.Email || "Vendor"}
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {vendor?.Name || "Vendor Name"}
                </Typography>
                <Typography variant="subtitle1" color="blue-gray" className="flex items-center">
                  {vendor?.Email || "Vendor Email"}
                </Typography>
              </div>
            </div>
            <div className="flex items-center ml-auto gap-2">
              <Button color='orange'  onClick={() => navigate('/vendors')}>Back to Vendors</Button >
            </div>
          </div>
            <div className=' w-full my-3 flex flex-row justify-evenly'>
                <div>
                    <h1 className='text-xl text-orange-900 mb-4'>Description</h1>
                    <div>
                        {vendor?.Description}
                    </div>
                </div>
                <div className='w-[1px] bg-orange-700 '></div>
                <div>
                    <h1 className='text-xl text-orange-900 mb-4'>other details</h1>
                    <div className='flex flex-row gap-3'>
                        <div>phone</div>
                        <div>{vendor?.Phone}</div>
                    </div>
                </div>

            </div>
        </CardBody>
      </Card>
    </>
  );
};

export default PreviewVendor;
