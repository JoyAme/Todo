const addForm=document.getElementById("addform")
const Task=document.getElementById("task")
const Editform=document.getElementById("Editform")
const code=document.querySelector(".code")
const status=document.getElementById("status")


TaskManger=JSON.parse(localStorage.getItem('allTask'))
// if(TaskManger ==null){
//     TaskManger=[]
// }


// aDDING TASK FORM
addForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const inputt=document.getElementById("inputt").value;
    const status=document.getElementById("status").value
    TaskManger.push({
        Todo:inputt,
        Status:status
    })
   console.log(inputt)
    Modal(TaskManger)
})

    const  Modal=(data)=>{
        
       
        Task.innerHTML="";
        
        data.map((value,key)=>{
            Task.innerHTML+=`
            <div class='flex  mt-3 card-body border-0 shadow-sm'>
            <div class="coding">
                <h1 class="code">${value.Todo}</h1>
                <div class="trash-D">
                    
                    <div class="combine">
                        <span class="material-symbols-outlined">
                            edit_square
                            </span>
                        <h5 class="Edit" onclick="Edit(${key})">Edit</h5>
                    </div>
                    <div class="combine">
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                        <h5 class="delete" onclick="Delete(${key})">Delete</h5>
                    </div>
                
                </div>
            </div>
            <div class="code-2">
                <div class="status 
               ${value.Status} =='pending' ? status.style.backgroundColor='red';:
               ${value.Status} == 'Complete' ?  status.style.backgroundColor='green';:
             status.style.backgroundColor='green'
                ">${value.Status}</div>
            </div>
           </div>
            `
        })
        localStorage.setItem('allTask', JSON.stringify(data))
    
    }
    Modal(TaskManger)


        // closingforms  functions 
        const show=()=>{
            addForm.style.display='block'
        }
        const closeForm=()=>{
            addForm.style.display='none'
        }

    // editing functions
   function Edit(id){
        Editform.style.display='block'

    document.getElementById("editinput").value=TaskManger[id].Todo
    document.getElementById("editstatus").value=TaskManger[id].Status
    document.getElementById("hidform").value=id
    // console.log(id)
    
    }
    
    let close=document.getElementById("closeform")


    
    // EdITING FORM
    Editform.addEventListener('submit',(e)=>{
        e.preventDefault();
    let Todo=document.getElementById("editinput").value
    let Status=document.getElementById("editstatus").value
    let id=document.getElementById("hidform").value

    TaskManger[id].Todo=Todo
    TaskManger[id].Status=Status
   
    Modal(TaskManger)
    Editform.style.display='none'
    console.log(Todo)
    console.log(Status)

    })

    const Delete=(id)=>{
        if(confirm('do you wantto delete?')){
            TaskManger.splice(id,1)
            Modal(TaskManger)
        }
    }














//    const Show=()=>{
//     addForm.style.display='block';
//     Modal(TaskManger)
//     }
//     Show()
//     ${value.Status=="pending"? value.Status.style.backgroundColor = "red":
//     value.Status=='in-progress'? value.Status.style.backgroundColor='yellow':value.Status.style.backgroundColor='green'
//    }