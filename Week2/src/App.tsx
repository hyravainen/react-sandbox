// Import the newly created component
import { Profile } from './components/ProfileTest';
import { TeamCard } from './components/TeamCard';
export default function App() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8 text-slate-700">Welcome to React!</h1>
      {/* Use the component and pass it the required props */}
      <Profile name="Your own name here" role="your role" />
      
      <div className='flex gap-4'> 
      <TeamCard name="Bart Simpson" role="SON" />
      <TeamCard name="Lisa Simpson" role="DAUGHTER" />
      <TeamCard name="Maggie Simpson" role="DAUGHTER" />
      <TeamCard name="Marge Simpson" role="MOTHER" />
      <TeamCard name="Homer Simpson" role="FATHER" />
      </div>
    </div>
  );
}