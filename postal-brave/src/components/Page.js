import React from 'react';
import './Page.css';
import {MdShoppingCart} from 'react-icons/md';
import {AiFillFacebook} from 'react-icons/ai';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Icon } from '@mui/material';

function Page(){
return(
<div>
    <div class="topnav">
        <table>
        <tr>
           <td id="shoes">Shoes Hub</td>
           <span className='tags'>
           <td>Home</td>
           <td>Men</td>
           <td>Women</td>
           <td>Kids</td>
           <td>about</td>
           <td>contact</td>
           <span>
           <td><button>Log in</button></td>
           <td><MdShoppingCart/></td>
           </span>
           <span class="icons">
            <td><AiFillFacebook/></td>
            <Icon>{FacebookIcon}</Icon>
            <Icon>{YouTubeIcon}</Icon>
            <Icon>{InstagramIcon}</Icon>
           </span>
           </span>
        </tr>
        </table>
    </div>
</div>
)
}
export default Page;