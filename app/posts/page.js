import { Prosto_One } from "next/font/google";


export default async function postPage(){

    const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
        next:{revalidate:120}
    });
    const posts = await res.json();
    console.log(posts)

    const postJsx = posts.map((post)=>{
        
        return <div key={post.id} style={{marginBottom:"20px", padding:"10px", border:"1px solid black"}}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    })
    
    return(
        <div>
            <p>post ditelse</p>
            
            <div>{postJsx}</div>
            
            <h1>i'm here</h1>
            
        </div>
    )
}