import { getUserAndProfileData } from "../actions";
import { PersonalPreferencesForm } from "@/components/features/user/profile/personal-preferences-form";


const handler = async () =>  {
    const { user, profile } = await getUserAndProfileData()
    
    return (
        <>  
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-bold">Personal Preferences</h1>
            </div>
            <PersonalPreferencesForm user={user} profile={profile} />
        </>
    )
}

export default handler;