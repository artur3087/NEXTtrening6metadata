// [id] Page //

// This file was created in [id] folder so it allows for ... //

// exporting default function like always //

// export default async function SingleDudePost () // This would be a function without destructuring it with searchParams //



// export const metadata = {
//     title: params.id     // params.id exist only within a SingleDudePost function but it metadata needs to be exported outside that function //
// }; // It will not work on dynamic page .. //

// Solution below //




// export async function generateMetadata({params}) { // START OF generateMetaData function //
//     console.log(params);
//     return {
//         title: `Dude post's id: ${params.id}`,
//     };


// } // END of generateMetaData function //

export async function generateMetadata ( { params }) {
    const response = await fetch (
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );

    const post = await response.json();
    return {
        title: post.title,
        description: post.body,
    }
}





export default async function SingleDudePost ( {params} ) { // default function START // Has to be async again :) .. // Destructured with params as a parameter(?) //


    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/25`); // It will always fetch post number 25 because it is hardcoded .. //
    
    
    
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`); // 25 had to be replaced by params //
    
    // A reason why we end searchParams with .id above, is that folder is named [id]. It can be named in different way tho //
    
    
    
    const post = await response.json();


    
    
    
    return ( // returning START //
    
        <div>
            <h2>Temporary here. This is a post, dude! Believe that this is a post, please. I beg You! </h2>
<br></br>
            <h2>
                {post.title}
            </h2>
            <p>
                {post.body}
            </p>
        </div>
    
    ) // returning END //






} // default function END //