import { useState } from "react";
import {
    Input,
    Typography,
    Button,
    IconButton,
    Dialog,
    Textarea,
    DialogBody,
    DialogHeader,
    DialogFooter,
} from "@material-tailwind/react";
import axios from "axios";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
const API_URL = import.meta.env.VITE_URL;




export default function UpdateVendorDialog({id,refresh}) {
    const vendorID = id
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [description, setDescription] = useState(null)
    const [image, setImage] = useState(null); // To store the image

    const handleOpen = () => setOpen(!open);

    // Function to handle input changes
    const updateVendor = async () => {
        console.log("vendor id in updateFunction:", vendorID);
    
        // Create form-data object
        const formData = new FormData();
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("description", description);
    
        // Append the image only if it's selected
        if (image) {
            formData.append("img", image);
        }
    
        try {
            // Make the PUT request with form-data
            const res = await axios.put(`${API_URL}/admin/update-vendor/${vendorID}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Explicitly set the header for form-data
                }
            });
    
            alert(res.data.message || "Vendor updated successfully");
            handleOpen(); 
            refresh();
        } catch (error) {
            alert(error.response?.data?.message || "Failed to update vendor");
            console.log("Error updating vendor:", error.response ? error.response.data : error);
        }
    }
    
    

    return (
        <>
            <IconButton onClick={handleOpen} variant="text">
                <PencilIcon className="h-4 w-4 text-orange-700" />
            </IconButton>
            <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
                <DialogHeader className="relative m-0 block">
                    <Typography variant="h4" color="blue-gray">
                        Manage Item
                    </Typography>
                    <IconButton
                        size="sm"
                        variant="text"
                        className="!absolute right-3.5 top-3.5"
                        onClick={handleOpen}
                    >
                        <XMarkIcon className="h-4 w-4 stroke-2" />
                    </IconButton>
                </DialogHeader>
                <DialogBody className="space-y-4 pb-6">
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-left font-medium"
                        >
                            Name
                        </Typography>
                        <Input
                            color="gray"
                            size="lg"
                            placeholder="vendor name"
                            name="name"
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            className="placeholder:opacity-100 focus:!border-t-gray-900"
                            containerProps={{
                                className: "!min-w-full",
                            }}
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 text-left font-medium"
                            >
                                Profile Image
                            </Typography>
                            <Input
                                type="file"
                                accept="image/*"
                                color="gray"
                                size="lg"
                                onChange={(e) => {
                                    setImage(e.target.files[0]);
                                }} // Handle image change
                                className="placeholder:opacity-100 focus:!border-t-gray-900"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 text-left font-medium"
                            >
                                Phone
                            </Typography>
                            <Input
                                color="gray"
                                size="lg"
                                placeholder="09X XXX XXXX"
                                name="phone"
                                onChange={(e) => {
                                    setPhone(e.target.value)

                                }}
                                className="placeholder:opacity-100 focus:!border-t-gray-900"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-left font-medium"
                        >
                            Description
                        </Typography>
                        <Textarea
                            rows={7}
                            placeholder="eg. anything"
                            name="description"
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button className="ml-auto" color="orange" onClick={(e)=>{
                        handleOpen(e)
                        updateVendor(e)
                    }}>
                        confirm
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
