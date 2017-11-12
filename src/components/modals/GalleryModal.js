import React from 'react'
import Gallery from 'react-grid-gallery';
import {Modal} from "antd";

export function GalleryModal(props){

    const IMAGES =
        [
            {
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490203/23319018_1518390078245441_1846636027514071955_n_1_bqrxbh.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490203/23319018_1518390078245441_1846636027514071955_n_1_bqrxbh.jpg",
            thumbnailWidth: 640,
            thumbnailHeight: 640,
            isSelected: true,
                tags: [{value: "Boot Production", title: "Boot Production"}],
                caption: "A model of boot produced by persons with disabilities on a commercial scale"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490203/23244337_1518390821578700_1192549046355220889_n_kp6atq.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490203/23244337_1518390821578700_1192549046355220889_n_kp6atq.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 640,
            tags: [{value: "Boots", title: "Boot"},{value: "Donation", title: "Donation"}],
            caption: "Time with Mr. James Antwi (SuperSteps Group Limited) - Donation of boots to Ghana Police Services"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490202/23231631_1518423554908760_6867040689903765685_n_vhggk9.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490202/23231631_1518423554908760_6867040689903765685_n_vhggk9.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 640,
            tags: [{value: "Boots", title: "Boot"},{value: "Donation", title: "Donation"}],
            caption: "Time with Mr. Ntim Twumasi Kwaku (with microphone) - Donation of boots to Ghana Police Services"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490202/23131764_1516600871757695_8599224583090641881_n_em1uoq.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490202/23131764_1516600871757695_8599224583090641881_n_em1uoq.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 640,
            tags: [{value: "Boots", title: "Boot"},{value: "Donation", title: "Donation"}],
            caption: "Donation of boots to Ghana Police Services"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490203/23244029_1516600685091047_3107528583786026964_n_kywvty.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490203/23244029_1516600685091047_3107528583786026964_n_kywvty.jpg",
            thumbnailWidth: 720,
            thumbnailHeight: 960,
            tags: [{value: "Boots", title: "Boot"},{value: "Jobs", title: "Jobs"}],
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490201/21457635_1469503606467422_5732383491773827600_o_chlgq9.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490201/21457635_1469503606467422_5732383491773827600_o_chlgq9.jpg",
            thumbnailWidth: 1080,
            thumbnailHeight: 516,
            tags: [{value: "Manhyia Palace", title: "Manhyia Palace"},{value: "Queen Mother", title: "Queen Mother"},{value: "Children Advocacy", title: "Children Advocacy"}],
            caption: "Nana Konadu Yiadom III Maiden Programme for kids with special needs"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490201/21458097_1469496393134810_6785597638499235331_o_qi0d76.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490201/21458097_1469496393134810_6785597638499235331_o_qi0d76.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 640,
            tags: [{value: "Manhyia Palace", title: "Manhyia Palace"},{value: "Queen Mother", title: "Queen Mother"},{value: "Children Advocacy", title: "Children Advocacy"}],
            caption: "Group picture with traditional leaders in Ashanti Kingdom"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490202/22228441_1491161104301672_8198705713296893078_n_rawexf.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490202/22228441_1491161104301672_8198705713296893078_n_rawexf.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 720,
            tags: [{value: "Cerebral Palsy Day", title: "Cerebral Palsy Day"},{value: "KSPC", title: "KSPC"},{value: "British Council", title: "British Council"}],
            caption: "WeRise Foundation, Kids an Single Parents Care (KSPC) and British Council celebrates Cerebral Palsy Day"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490202/22281977_1491161164301666_5013033389640296953_n_xxbgaj.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490202/22281977_1491161164301666_5013033389640296953_n_xxbgaj.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 720,
            tags: [{value: "Cerebral Palsy Day", title: "Cerebral Palsy Day"},{value: "KSPC", title: "KSPC"},{value: "British Council", title: "British Council"}],
            caption: "WeRise Foundation, Kids an Single Parents Care (KSPC) and British Council celebrates Cerebral Palsy Day"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490202/22308556_1491161294301653_8800116872254147019_n_suzmii.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490202/22308556_1491161294301653_8800116872254147019_n_suzmii.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 720,
            tags: [{value: "Cerebral Palsy Day", title: "Cerebral Palsy Day"},{value: "KSPC", title: "KSPC"},{value: "British Council", title: "British Council"}],
            caption: "WeRise Foundation, Kids an Single Parents Care (KSPC) and British Council celebrates Cerebral Palsy Day"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490202/22310461_1491161007635015_3835368827955786342_n_e7r8vz.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490202/22310461_1491161007635015_3835368827955786342_n_e7r8vz.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 720,
            tags: [{value: "Cerebral Palsy Day", title: "Cerebral Palsy Day"},{value: "KSPC", title: "KSPC"},{value: "British Council", title: "British Council"}],
            caption: "WeRise Foundation, Kids an Single Parents Care (KSPC) and British Council celebrates Cerebral Palsy Day"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490202/22310507_1491161217634994_4166182341798976412_n_kxmyuo.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490202/22310507_1491161217634994_4166182341798976412_n_kxmyuo.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 720,
            tags: [{value: "Cerebral Palsy Day", title: "Cerebral Palsy Day"},{value: "KSPC", title: "KSPC"},{value: "British Council", title: "British Council"}],
            caption: "WeRise Foundation, Kids an Single Parents Care (KSPC) and British Council celebrates Cerebral Palsy Day"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510492637/Picture1_xtksdy.png",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510492637/Picture1_xtksdy.png",
            thumbnailWidth: 973,
            thumbnailHeight: 695,
            tags: [{value: "Unifest 16", title: "Unifest 16"},{value: "KNUST", title: "KNUST"}],
            caption: "Games between persons with disabilities (amputees) and WeRise Foundation executives"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490200/16998193_1283188648432253_2877390829237231990_n_piat3p.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490200/16998193_1283188648432253_2877390829237231990_n_piat3p.jpg",
            thumbnailWidth: 640,
            thumbnailHeight: 640,
            tags: [{value: "Unifest 16", title: "Unifest 16"},{value: "KNUST", title: "KNUST"}],
            caption: "Games between persons with disabilities (amputees) and WeRise Foundation executives"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490200/17203059_1291697930914658_4671651694669277855_n_bi7suw.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490200/17203059_1291697930914658_4671651694669277855_n_bi7suw.jpg",
            thumbnailWidth: 640,
            thumbnailHeight: 640,
            tags: [{value: "Unifest 16", title: "Unifest 16"},{value: "KNUST", title: "KNUST"}],
            caption: "Games between persons with disabilities (amputees) and WeRise Foundation executives"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490198/13063421_1028822843868836_2279508080774617250_o_vsn4b9.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490198/13063421_1028822843868836_2279508080774617250_o_vsn4b9.jpg",
            thumbnailWidth: 1080,
            thumbnailHeight: 810,
            tags: [{value: "Unifest 16", title: "Unifest 16"},{value: "KNUST", title: "KNUST"}],
            caption: "Games between persons with disabilities (amputees) and WeRise Foundation executives"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490201/21751553_1472969942787455_254098819501876423_n_pzm8we.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490201/21751553_1472969942787455_254098819501876423_n_pzm8we.jpg",
            thumbnailWidth: 640,
            thumbnailHeight: 640,
            tags: [{value: "Unifest 16", title: "Unifest 16"},{value: "KNUST", title: "KNUST"}],
            caption: "Games between persons with disabilities (amputees) and WeRise Foundation executives"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490201/21766479_1478606712223778_9048430490127768026_n_ala0jt.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490201/21766479_1478606712223778_9048430490127768026_n_ala0jt.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 963,
            tags: [{value: "Unifest 16", title: "Unifest 16"},{value: "KNUST", title: "KNUST"}],
            caption: "Games between persons with disabilities (amputees) and WeRise Foundation executives"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510492637/Picture3_cvsaow.png",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510492637/Picture3_cvsaow.png",
            thumbnailWidth: 973,
            thumbnailHeight: 648,
            tags: [{value: "Awards", title: "Awards"},{value: "NUGS", title: "NUGS"},{value: "Best Student Group", title: "Best Student Group"},{value: "KNUST", title: "KNUST"}],
            caption: "Vice Chancellor - NUGS Best Student Group Awards"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490201/21414896_1469502963134153_1952560105122391450_o_tgvatn.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490201/21414896_1469502963134153_1952560105122391450_o_tgvatn.jpg",
            thumbnailWidth: 1280,
            thumbnailHeight: 853,
            tags: [{value: "Awards", title: "Awards"},{value: "NUGS", title: "NUGS"},{value: "Best Student Group", title: "Best Student Group"},{value: "KNUST", title: "KNUST"}],
            caption: "Vice Chancellor - NUGS Best Student Group Awards"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490197/13119099_1030113370406450_6539986892678707645_n_artvak.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490197/13119099_1030113370406450_6539986892678707645_n_artvak.jpg",
            thumbnailWidth: 1280,
            thumbnailHeight: 853,
            tags: [{value: "Awards", title: "Awards"},{value: "NUGS", title: "NUGS"},{value: "Best Student Group", title: "Best Student Group"},{value: "KNUST", title: "KNUST"}],
            caption: "Vice Chancellor - NUGS Best Student Group Awards"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490201/21543733_1469498036467979_1997783388426194973_o_rfter3.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490201/21543733_1469498036467979_1997783388426194973_o_rfter3.jpg",
            thumbnailWidth: 1280,
            thumbnailHeight: 853,
            tags: [{value: "Awards", title: "Awards"},{value: "NUGS", title: "NUGS"},{value: "Best Student Group", title: "Best Student Group"},{value: "KNUST", title: "KNUST"}],
            caption: "Vice Chancellor - NUGS Best Student Group Awards"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490199/14425325_1130121420405644_2323807353284510680_o_lfwbgz.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490199/14425325_1130121420405644_2323807353284510680_o_lfwbgz.jpg",
            thumbnailWidth: 1032,
            thumbnailHeight: 581,
            tags: [{value: "Awards", title: "Awards"},{value: "NUGS", title: "NUGS"},{value: "Best Student Group", title: "Best Student Group"},{value: "National", title: "National"}],
            caption: "National Students Awards - Best Student Group"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490198/12419058_958992004185254_2115793802162225221_o_ousbjb.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490198/12419058_958992004185254_2115793802162225221_o_ousbjb.jpg",
            thumbnailWidth: 1599,
            thumbnailHeight: 899,
            tags: [{value: "Rattray Park", title: "Rattray Park"},{value: "Get Together", title: "Get Together"}],
            caption: "Get together at Rattray Park. Disability is not inability"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490197/13100848_1029487787135675_4935716251851665380_n_nwx7yy.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490197/13100848_1029487787135675_4935716251851665380_n_nwx7yy.jpg",
            thumbnailWidth: 904,
            thumbnailHeight: 904,
            tags: [{value: "Rattray Park", title: "Rattray Park"},{value: "Get Together", title: "Get Together"}],
            caption: "Get together at Rattray Park. Disability is not inability"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510492636/Picture45_hm0yue.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510492636/Picture45_hm0yue.jpg",
            thumbnailWidth: 468,
            thumbnailHeight: 263,
            tags: [{value: "Sports", title: "Sports"},{value: "Amputee Team", title: "Amputee Team"}],
            caption: "Dr. Marfo with WeRise Foundation Soccer Team"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510492636/Picture44_hhtup2.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510492636/Picture44_hhtup2.jpg",
            thumbnailWidth: 468,
            thumbnailHeight: 263,
            tags: [{value: "Sports", title: "Sports"},{value: "Amputee Team", title: "Amputee Team"}],
            caption: "Dr. Marfo with WeRise Foundation Soccer Team"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490199/13415533_1059536460797474_1876858127149312090_o_mszutl.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490199/13415533_1059536460797474_1876858127149312090_o_mszutl.jpg",
            thumbnailWidth: 1080,
            thumbnailHeight: 607,
            tags: [{value: "Sports", title: "Sports"},{value: "Basketball", title: "Basketball"},{value: "Amputee Team", title: "Amputee Team"}],
            caption: "Dr. Marfo with WeRise Foundation Basketball Team"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490199/14358796_1130135547070898_6383343504319104374_n_qtnk4o.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490199/14358796_1130135547070898_6383343504319104374_n_qtnk4o.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 960,
            tags: [{value: "Y-Dialogues", title: "Y-Dialogues"}],
            caption: "Ghana Elections 2016 - Advocacy for Peace. WeRise hosts Y-Dialogue in KNUST"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510490199/14445927_1142730272478092_584117488480934810_n_vabfok.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490199/14445927_1142730272478092_584117488480934810_n_vabfok.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 960,
            tags: [{value: "Y-Dialogues", title: "Y-Dialogues"}],
            caption: "Ghana Elections 2016 - Advocacy for Peace. WeRise hosts Y-Dialogue in KNUST"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510494615/14322405_1130153983735721_8818042590495779497_n_fptvb7.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510494615/14322405_1130153983735721_8818042590495779497_n_fptvb7.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 960,
            tags: [{value: "Y-Dialogues", title: "Y-Dialogues"}],
            caption: "Ghana Elections 2016 - Advocacy for Peace. WeRise hosts Y-Dialogue in KNUST"
        },{
            src: "http://res.cloudinary.com/du43ktr2x/image/upload/v1510494527/14359185_1130127810405005_4199768878743692005_n_jumyk4.jpg",
            thumbnail: "https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510494527/14359185_1130127810405005_4199768878743692005_n_jumyk4.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 960,
            tags: [{value: "Y-Dialogues", title: "Y-Dialogues"}],
            caption: "Ghana Elections 2016 - Advocacy for Peace. WeRise hosts Y-Dialogue in KNUST"
        },{
        src:"http://res.cloudinary.com/du43ktr2x/image/upload/v1510490200/17966382_1330644640353320_8894247097274316741_o_earu7g.jpg",
            thumbnail:"https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490200/17966382_1330644640353320_8894247097274316741_o_earu7g.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 960,
            tags: [{value: "KSPC", title: "KSPC"},{value: "Cerebral Palsy", title: "Cerebral Palsy"},{value: "Ashanti Region Advocacy", title: "Ashanti Region Advocacy"}],
            caption: "Ghana Elections 2016 - Advocacy for Peace. WeRise hosts Y-Dialogue in KNUST"
        },{
        src:"http://res.cloudinary.com/du43ktr2x/image/upload/v1510490200/14680755_1146760738741712_3992441489849354628_n_z7gzjb.jpg",
            thumbnail:"https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490200/14680755_1146760738741712_3992441489849354628_n_z7gzjb.jpg",
            thumbnailWidth: 720,
            thumbnailHeight: 960,
            tags: [{value: "KSPC", title: "KSPC"},{value: "Cerebral Palsy", title: "Cerebral Palsy"},{value: "Ashanti Region Advocacy", title: "Ashanti Region Advocacy"}],
            caption: "Cerebral Palsy Programme in Kumasi Sports Stadium"
        },{
        src:"http://res.cloudinary.com/du43ktr2x/image/upload/v1510490198/14333189_1130982046986248_6471459185790119154_n_ohs0ti.jpg",
            thumbnail:"https://res.cloudinary.com/du43ktr2x/image/upload/t_media_lib_thumb/v1510490198/14333189_1130982046986248_6471459185790119154_n_ohs0ti.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 960,
            tags: [{value: "KSPC", title: "KSPC"},{value: "Cerebral Palsy", title: "Cerebral Palsy"},{value: "Ashanti Region Advocacy", title: "Ashanti Region Advocacy"}],
            caption: "Cerebral Palsy Programme in Kumasi Sports Stadium"
        }];


    return ( <Modal
            className="minuter-modal"
            width={960}
            title="Gallery"
            visible={props.visible}
            footer={null}
            onCancel={() => props.disable()}>

        <div style={{
            display: "block",
            minHeight: "1px",
            width: "100%",
            border: "1px solid #ddd",
            overflow: "auto"}}>            <Gallery enableImageSelection={false} images={IMAGES}/>
</div>
        </Modal>
    )
}