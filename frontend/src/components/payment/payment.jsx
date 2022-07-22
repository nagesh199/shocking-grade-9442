import React from "react";
import styles from "./payment.module.css"
import wallet from "../../assets/payment/wallet.png"
import Upi from "../../assets/payment/upi.webp"
import PayOn from "../../assets/payment/payon.webp";
import Netbanking from "../../assets/payment/netbanking.webp";
import Cards from "../../assets/payment/cards.webp";
import { Wallet } from "./wallet";
import { Upipage } from "./upi";

export const Payment =()=>{
    return (
        <div className={styles.paymentmain}>
            <div className={styles.payment}>
                <div>
                    <img src={wallet} alt=""/>
                    <p>WALLETS</p>
                </div>
                <div>
                    <img src={Upi} alt=""/>
                    <p>UPI</p>
                </div>
                <div>
                    <img src={Cards} alt=""/>
                    <p>CARDS</p>
                </div>
                <div>
                    <img src={Netbanking} alt=""/>
                    <p>NET BANKING</p>
                </div>
                <div>
                    <img src={PayOn} alt=""/>
                    <p>PAY ON DELIVERY</p>
                </div>
            </div>
            <div className={styles.payment1}>
                 {/* <Wallet/> */}
                 <Upipage/>
            </div>
        </div>
    )
}