const styles = {
    container: {
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'15%',
        
    },
    table: {
        width: '50%',
    },
    tableHead: {
        fontFamily:'Trebuchet MS, sans-serif',
        fontWeight: 'bold',
    },
    form: {
        display: 'flex',
        flexDirection:'column',
    },
    modifiedForm: {
        display:'flex',
        padding:'5%',
        maxHeight:'50px',
        
    },
    inputSelectContainer: {
        display: 'flex',
        flexDirection:'row-reverse',
    },
    ingresar: {
        padding:'3%',
        width:'65%', 
        backgroundColor: '#06cf10',   
        color:'white',
        borderRadius:'5%', 
        fontFamily:'Trebuchet MS, sans-serif',
    

    },
    ingresarModified: {
        padding:'3%',
        width:'20vh', 
        maxHeigth:'1vh',
        marginLeft:'20%',
        backgroundColor: '#06cf10',   
        color:'white',
        borderRadius:'5%',
        fontFamily:'Trebuchet MS, sans-serif',

    },
    ingresarContainer: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        marginRight:'-10%',
    },
    selectSubmitContainer: {
        display: 'flex',
    },
    inputYunidad: {
        display: 'flex',
        marginRight:'8%',
    },
    select: {
        padding:'2%',
        width:'110%',
        marginBottom:'2%',
        marginRight:'5%',
        fontWeight: 'bold',
        fontFamily:'Trebuchet MS, sans-serif',
    },
    option: {
        padding:'3px',
        fontSize:'15px',
    },
    trash: {
        cursor: 'pointer',
    },
    inputText: {
        marginBottom: '2%',
        padding:'2%',
        fontFamily:'Trebuchet MS, sans-serif',
    },
    unidad: {
        marginLeft: '4%',
        marginTop:'2%',
        fontFamily:'Trebuchet MS, sans-serif',
        fontWeight:'italic',
    },
    error: {
        color:'red',
        fontSize:'94%',
        fontFamily:'Trebuchet MS, sans-serif',

    },
    errorModified: {
        display:'flex',
        flexDirection:'column',
    },
    inputErrorContainer: {
        display:'flex',
        flexDirection:'column',
    },
}

export default styles;