import { memo, useEffect } from 'react';
import {
    classNames, DynamicModuleLoader, ReducersList, useAppDispatch,
} from '@/shared/lib';
import { fetchProfileData, ProfileCard, profileReducer } from '@/entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [ dispatch ]);

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <div className={ classNames('', {}, [ className ]) }>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
