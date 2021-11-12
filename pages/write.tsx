import React from 'react';
import {NextPage} from "next";
import MainLayout from "../layouts/MainLayout";
import dynamic from "next/dynamic";
const WriteForm = dynamic(() => import("../components/Forms/WriteForm"), { ssr: false });

type WriteProps = {}

export const Write: NextPage<WriteProps> = (props) => {
    return (
        <MainLayout hideMenu hideComment>
           <WriteForm/>
        </MainLayout>
    )
};
export default Write