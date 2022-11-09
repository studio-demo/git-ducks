import { UserResponse } from '../../shared/model/api-user';
import { pythonIcon } from '../../components/pages/overview/techs/icons/python';
import { cSharpIcon } from '../../components/pages/overview/techs/icons/CSharp';
import { htmlIcon } from '../../components/pages/overview/techs/icons/html';
import { reactIcon } from '../../components/pages/overview/techs/icons/react';
import { nodeIcon } from '../../components/pages/overview/techs/icons/node';
import { jsIcon } from '../../components/pages/overview/techs/icons/js';

export const response_user: UserResponse = {
    user: {
        avatarUrl: 'https://i.pravatar.cc/150?img=pavlo',
        bio: null,
        login: 'plisovyi',
        name: 'Pavlo',
        location: 'Tel Aviv IL',
        email: 'pavlol@wix.com',
        twitterUsername: null,
        websiteUrl: 'http://wix.com',
        techs: [htmlIcon, pythonIcon, cSharpIcon, reactIcon, nodeIcon, jsIcon],
        company: 'Wix',
        following: {
            totalCount: 68,
        },
        followers: {
            totalCount: 4319,
        },
        status: null,
        organizations: {
            edges: [
                {
                    node: {
                        login: 'wix',
                        avatarUrl: 'https://i.pravatar.cc/150?img=wix',
                    },
                },
            ],
        },
    },
};
