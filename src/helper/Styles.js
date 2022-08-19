let PrimaryColors=["#ff7a49","#afcffc","#fd9483","#F4B5C8","#68FBD1"]
const GetPrimaryColors=(index)=>{
    while(index>PrimaryColors.length-1)index-=PrimaryColors.length;
    return PrimaryColors[index];
}
export  {GetPrimaryColors}
