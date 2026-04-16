import { useState } from 'react';

interface CardProps{
    name: string;
    role: string;
}

export function TeamCard({name, role}: CardProps){
    const [votes, setVotes] = useState(0);

    return(
         // TeamCard.tsx sisällä:
<div className="p-6 bg-amber-100 rounded-xl shadow-md border border-blue-200 text-center">
      {/* Display the data received as props */}
      <h2 className="text-2xl font-bold text-slate-800">{name}</h2>
      <p className="text-slate-500 font-medium mb-6">{role}</p>     
      {/* 5. Button: When clicked (onClick), increment the likes value by one. */}
      <button
        onClick={() => setVotes((prev) => prev + 1)}
        className="w-full bg-amber-300 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-100 flex justify-center gap-2 transition-colors"
      >
        <span>Vote</span>
        <span>❤️ {votes}</span>
      </button>
    </div>
    )
}