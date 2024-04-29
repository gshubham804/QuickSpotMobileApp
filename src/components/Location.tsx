import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import GetLocation from "react-native-get-location";
import { useDispatch, useSelector } from "react-redux";
import { handle_get_Location } from "../redux/locationSlice";

interface LocationData {
  latitude: number | null;
  longitude: number | null;
}

const Location: React.FC = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState<LocationData>({
    latitude: null,
    longitude: null,
  });
  const [currentAddress, setCurrentAddress] = useState<String>("");
  const  locationDataFromSlice  = useSelector((state) => state?.location);
  console.log(locationDataFromSlice);

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then((location) => {
        console.log(location);
        setLocation({
          latitude: location.latitude,
          longitude: location.longitude,
        });
      })
      .catch((error) => {
        const { code, message } = error;
        console.warn(code, message);
      });
  }, []);

  useEffect(()=>{
    if(location)
    dispatch(handle_get_Location(location?.latitude, location?.longitude));
    setCurrentAddress(locationDataFromSlice);
  },[location]);

  return (
    <View>
      {location.latitude !== null && location.longitude !== null ? (
        <>
        <Text>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </Text>
        <Text>
          {currentAddress}
        </Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
      <Text>Location Component</Text>
    </View>
  );
};

export default Location;
