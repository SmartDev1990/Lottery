import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import { Button, IconButton } from "@mui/material";

import logo from "../../../Assets/logo3.png";
import SunIcon from "../../UI/Icons/SunIcon";
import { NavLink } from "react-router-dom";
import Burger from "./Burger/Burger";
import { useTheme } from "@emotion/react";
import UAuth from '@uauth/js'

const Navbar = (props) => {
  const { handleWallet, userAddress, chainId, acesPrice } = props;

  const theme = useTheme();

  const [uDauth, setUDauth] = useState()
  const [udUser, setUdUser] = useState()

  useEffect(() => {
    const uDauth = new UAuth({
      clientID: "88d22787-3245-4b63-8cf2-64a5e4ad169d",
      redirectUri: `${window.location.origin}`,
      scope: "openid wallet messaging:notifications:optional"
    }
    )
    setUDauth(uDauth)
  }, [])


  useEffect(() => {
    if (uDauth != undefined && udUser != undefined) {
      try {
        uDauth.user()
          .then((user) => {
            setUdUser(user)
          })
          .catch((e) => {
            console.log(e)
          })
      } catch (err) {
        // console.log(err)
      }
    }
  }, [uDauth, udUser])


  return (
    <div className={classes.main}>
      <div
        className={classes.left}
        style={{
          backgroundColor: theme.palette.background.main,
        }}
      >
        <img className={classes.logo} src={logo} />
        <div className={classes.links}>
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/nft_minting"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            Minting
          </NavLink>
          <NavLink
            to="/nft_lottery"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            LotteryNFT
          </NavLink>
          <NavLink
            to="/Lottery"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            Lottery
          </NavLink>
          <NavLink
            to="/staking"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            Staking
          </NavLink>
          <NavLink
            to="https://cmp.pandamint.xyz"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            CMPChain
          </NavLink>
        </div>
        <div className={classes.burger}>
          <Burger />
        </div>
      </div>
      <div className={classes.right}>
        {/* <IconButton className={classes.themeBut}>
          <SunIcon />
        </IconButton> */}
        <div className={classes.curs}>
          {/*<p>1 $PDM = $NAN</p>
           <p>&nbsp;${acesPrice}</p> */}
        </div>
        <div className={classes.walletButContainer}>
          <div className={classes.bsc}>
            <div className={classes.statusCircle} />
            <p>
              {chainId === 1
                ? "ETH"
                : chainId === 4
                  ? "ETH Rinkeby"
                  : chainId === 5000
                    ? "MANTLE"
                    : chainId === 56
                      ? "BSC"
                      : chainId === 97
                        ? "BSC Testnet"
                        : "Unknown"}
            </p>
          </div>
          <Button onClick={handleWallet} className={classes.walletBut}>
            {udUser ? udUser.sub : userAddress
              ? `${userAddress.slice(0, 6)}...${userAddress.slice(-6)}`
              : "Connect Wallet"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
