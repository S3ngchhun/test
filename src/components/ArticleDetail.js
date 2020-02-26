import React from 'react'
import { useParams } from 'react-router-dom'

export default function ArticleDetail() {
    
    const id = useParams();
    console.log(id);
    
    return (
        <div>
            Article No.
        </div>
    )
}
