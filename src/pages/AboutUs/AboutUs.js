import React, {memo} from 'react';
import { coverObj } from './Data';
import { AboutUsCover } from '../../components';

function AboutUs() {
    return (
        <>
            <AboutUsCover {...coverObj}/>
        </>
    )
}

export default memo(AboutUs);
