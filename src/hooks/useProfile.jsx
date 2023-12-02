import { useState, useEffect, useContext } from 'react';
import supabase from '../supabase/client';
import AppContext from '../contexts/AppContext';

function useProfile() {
  const { session } = useContext(AppContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function getProfile() {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        if (error) {
          console.warn(error);
        } else {
          setProfile(data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getProfile();
  }, [session]);

  return {
    profile,
  };
}

export default useProfile;
