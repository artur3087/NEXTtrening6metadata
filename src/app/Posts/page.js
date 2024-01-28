// Posts Page //



// importing some hot stuff below: //


import Link from "next/link";
// import { metadata } from "../layout"; // 


// Below I code everything needed to make metadata be seen in a tab field //

export const metadata = {
    title: "Posts of every dude",
};   




// Export function for dudes below //

export default async function Posts () { // START of a default function // it has to be async now //
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return ( // returning START //
    
    <div>
        <h2>
            DUDES' POST page!
        </h2>
        <p>
            Brah!
        </p>
        {posts.map((post) =>  {
            return <div key = {post.id}>

            <h4>
                <Link href={`/Posts/${post.id}`}>{post.title}</Link>
            </h4>    

            </div>
})}
    </div>
    
    ) // returning END //




} // END of a default function //