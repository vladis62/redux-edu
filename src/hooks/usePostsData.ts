import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {RootState} from "../../store";

export interface Post {
    id?: string;
    title?: string;
    author?: string;
    thumbnail?: string;
    icon_img?: string;
    subreddit?: string;
}


export function usePostsData() {
    const token = useSelector<RootState, string>((state: RootState) => state.token);

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        console.log('token', token)
        if (token) {
            axios.get('https://oauth.reddit.com/best.json?sr_detail=true&limit=1', {
                headers: { Authorization: `bearer ${token}` },
            }).then((response) => {
                const posts = response.data.data.children.map((post: any) => {
                    return {
                        id: post.data.id,
                        title: post.data.title,
                        author: post.data.author,
                        thumbnail: post.data.thumbnail,
                        icon_img: post.data.sr_detail.icon_img,
                        subreddit: post.data.subreddit,
                    }
                })
                setPosts(posts);
            })
                .catch(console.log);
        }
    }, [token]);
    
    return [posts];

}

