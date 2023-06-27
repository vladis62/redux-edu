import axios from "axios";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
    const token = useSelector<RootState, string>((state: RootState) => state.token);
    const [data, setData] = useState<IUserData>({});

    useEffect(() => {
        if (token) {
            axios.get('https://oauth.reddit.com/api/v1/me.json', {
                headers: {Authorization: `bearer ${token}`}
            }).then((response) => {
                const {name, icon_img} = response.data;
                setData({name: name, iconImg: icon_img})
            })
                .catch(console.log);
        }
    }, [token]);

    return [data];
}