// $(document).ready(function () {
    

//     $.ajax({
//         url: '/data',
//         type: 'GET',
//         data:{'mode':'CSR'},
//         success: function (res) {
//             makelist(res)
//         }
//     }).fail((err)=>{
//         alert('get error')
//     });
    
//     $('#submit').click((e)=>{
//         e.preventDefault()
//         let data = $('.blogstyle form').serializeArray()
//         let s={'mode':'CSR'}
//         data.forEach((e)=>{
//             s[e.name]=e.value
//         })
//         $.ajax({
//             url: '/form',
//             type: 'POST',
//             data:s,
//             success: function (res) {
//                 console.log('done')
//                 makelist(res)
//             }
//         }).fail((err)=>{
//             alert(err.responseJSON.message)});
//     })
// });

// function  makelist(data){
//     // console.log(data.blogs)
//     $('#tasklist').html('')
    
//     data.blogs.forEach((ele)=>{
//         if(ele!=null){
//             li = template(ele)
//             create(li,ele.id)
//         }
//     })
// }
// function mydelete(id){
//     $.ajax({
//         url: '/delete/'+id,
//         type: 'GET',
//         data:{'mode':'CSR'},
//         success: function (res) {
//             console.log('deleteed data')
//         }
//     }).fail((err)=>{
//         alert(err.responseJSON.message)});
// }

// function up(id){
//     console.log(id)
//     $.ajax({
//         url: '/up/'+id,
//         type: 'GET',
//         data:{'mode':'CSR'},
//         success: function (res) {
//             console.log('up')
//         }
//     }).fail((err)=>{
//         alert(err.responseJSON.message)});
// }
// function down(id){
//     console.log(id)

//     $.ajax({
//         url: '/down/'+id,
//         type: 'GET',
//         data:{'mode':'CSR'},
//         success: function (res) {
//             console.log('down')
//         }
//     }).fail((err)=>{
//         alert(err.responseJSON.message)});
// }

// function update(id){
//     console.log(id)

//     $(`#${id}`).parent().submit((e)=>{
//         e.preventDefault()
//     }) 

//     let data = $(`#${id}`).serializeArray()
//     let s={'mode':'CSR'}
//     // console.log()
//     data.forEach((e)=>{
//         s[e.name]=e.value
//     })
//     console.log(s)
//     $.ajax({
//         url: '/update',
//         type: 'POST',
//         data:s,
//         success: function (res) {
//             console.log('update',res.blogs)
//             makelist(res)
//         }
//     }).fail((err)=>{
//         console.log(err)});

// }
// function create(text,id) {
//     let ele = $(`<li>${text} </li>`)

//     ele.append(
//         $('<button>')
//             .text('❌').click(function (e) {
//                 e.preventDefault()
//                 let parent = $(e.target).parent()
//                 // console.log(ele.text)
//                 parent.remove()
//                 mydelete(id)
//             })
//     )
//         .append(
//             $('<button>')
//                 .text('⬆').click(loop = (e) => {
//                 e.preventDefault()

//                     $(e.target).parent()
//                         .insertBefore($(e.target).parent()
//                             .prev()).animate(
//                                 {
//                                     opacity: 0.2,
//                                     easing: 'easeOutBounce',
//                                 }
//                                 , {
//                                     duartion: 2000,
//                                     complete: () => { $(e.target).parent().css({ 'opacity': '100%' }) }
//                                 });
//                 up(id)
//                 })
//                 .attr('class', 'up')

//         )
//         .append(
//             $('<button>')
//                 .text('⬇').click((e) => {
//                 e.preventDefault()
//                     $(e.target).parent().insertAfter($(e.target).parent().next())
//                         .animate(
//                             {
//                                 opacity: 0.2,
//                                 easing: 'easeOutBounce',
//                             }
//                             , {
//                                 duartion: 2000,
//                                 complete: () => { $(e.target).parent().css({ 'opacity': '100%' }) }
//                             });
//                             down(id)

//                 })
//                 .attr('class', 'down')

//         )
//     $('.blog_list').append(ele)
//     // return ele

// }

// function template(ele){
//    return ` 
//    <div class='card'>
//    <small>${ele.date}</small>
//    <div> <Strong>Title </Strong>${ele.title}</div>
//    <div><Strong>Email </Strong>${ele.email}</div>
//    <div><Strong>Category </Strong>${ele.cat}</div>
//    <div><Strong>Author </Strong>${ele.author}</div>
//    <div><Strong>Content </Strong>${ele.content}</div>
//    </div>
//    <div class='btn_list'>
//         <input type="checkbox" id="box" />Edit
//         <label for="box">
//         <form id=${ele.id} class="form-group" action="/update" method="POST">
//            <input type="hidden" name="id" value="${ele.id}"/>
//            <div class='head'>
//                <div>
//                    <strong>Title</strong>
//                    <input type='text' name='title' value='${ele.title}' placeholder="Title">
//                </div>
//                <div>
//                    <strong>Category</strong>
//                    <select name='cat'>
//                        <option></option>
//                        <option>entertainment</option>
//                        <option>technology</option>
//                        <option>DSA</option>
//                        <option>Web</option>
//                        <option>Android</option>
//                    </select>
//                </div>
//                <div>
//                    <strong>Email ID</strong>
//                    <input name='email' type='email' value='${ele.email}' placeholder="Email">
//                </div>
//                <div>
//                    <strong>Author</strong>
//                    <input name='author' type='text' value='${ele.author}' placeholder="Author">
//                </div>
//            </div>
//            <div class="content">
//                <strong>Content</strong>
//                <textarea name='content' cols='50' rows='5'>${ele.content}
//                </textarea>
//            </div>

//            <button  onclick='update(${ele.id})' type="submit">Save</button>
//          </form>
//         </label>
//    </div>

// }
$(document).ready(function () {
    console.log('ready')

    $.ajax({
        url: '/data',
        type: 'GET',
        data:{'mode':'CSR'},
        success: function (res) {
            makelist(res)
        }
    }).fail((err)=>{
        alert('get error')});
    
        $('#submit').click((e)=>{
        e.preventDefault()
        let data = $('.box form').serializeArray()
        let s={'mode':'CSR'}
        data.forEach((e)=>{
            s[e.name]=e.value
        })
        console.log(s)
        $.ajax({
            url: '/form',
            type: 'POST',
            data:s,
            success: function (res) {
                console.log('done')
                makelist(res)
            }
        }).fail((err)=>{
            alert(err.responseJSON.message)});
    })

    
});
 



function  makelist(data){
    // console.log(data.blogs)
    $('.blog_list').html('')
    
    data.blogs.forEach((ele)=>{
        if(ele!=null){
            li = template(ele)
            create(li,ele.id)
        }
    })
    
   
   
}

function mydelete(id){
    console.log(id)
    $.ajax({
        url: '/delete/'+id,
        type: 'GET',
        data:{'mode':'CSR'},
        success: function (res) {
            console.log('delete')
        }
    }).fail((err)=>{
        alert(err.responseJSON.message)});
}

function up(id){
    console.log(id)
    $.ajax({
        url: '/up/'+id,
        type: 'GET',
        data:{'mode':'CSR'},
        success: function (res) {
            console.log('up')
        }
    }).fail((err)=>{
        alert(err.responseJSON.message)});
}
function down(id){
    console.log(id)

    $.ajax({
        url: '/down/'+id,
        type: 'GET',
        data:{'mode':'CSR'},
        success: function (res) {
            console.log('down')
        }
    }).fail((err)=>{
        alert(err.responseJSON.message)});
}

function update(id){
    console.log(id)

    $(`#${id}`).parent().submit((e)=>{
        e.preventDefault()
    }) 

    let data = $(`#${id}`).serializeArray()
    let s={'mode':'CSR'}
    // console.log()
    data.forEach((e)=>{
        s[e.name]=e.value
    })
    console.log(s)
    $.ajax({
        url: '/update',
        type: 'POST',
        data:s,
        success: function (res) {
            console.log('update',res.blogs)
            makelist(res)
        }
    }).fail((err)=>{
        console.log(err)});

    }

function create(text,id) {
    let ele = $(`<li>${text} </li>`)

    ele.append(
        $('<button>')
            .text('❌').click(function (e) {
                e.preventDefault()
                let parent = $(e.target).parent()
                // console.log(ele.text)
                parent.remove()
                mydelete(id)
            })
    )
        .append(
            $('<button>')
                .text('⬆').click(loop = (e) => {
                e.preventDefault()

                    $(e.target).parent()
                        .insertBefore($(e.target).parent()
                            .prev())
                            // .animate(
                            //     {
                            //         opacity: 0.2,
                            //         easing: 'easeOutBounce',
                            //     }
                            //     , {
                            //         duartion: 2000,
                            //         complete: () => { $(e.target).parent().css({ 'opacity': '100%' }) }
                            //     });
                up(id)
                })
                .attr('class', 'up')

        )
        .append(
            $('<button>')
                .text('⬇').click((e) => {
                e.preventDefault()
                    $(e.target).parent().insertAfter($(e.target).parent().next())
                        // .animate(
                        //     {
                        //         opacity: 0.2,
                        //         easing: 'easeOutBounce',
                        //     }
                        //     , {
                        //         duartion: 2000,
                        //         complete: () => { $(e.target).parent().css({ 'opacity': '100%' }) }
                        //     });
                            down(id)

                })
                .attr('class', 'down')

        )
    $('.blog_list').append(ele)
    // return ele

}

function template(ele){
   return ` 
   <div class='card'>
    
   <div> <Strong>Title </Strong>${ele.title}</div>
   <div><Strong>Email </Strong>${ele.email}</div>
   <div><Strong>Category </Strong>${ele.cat}</div>
   <div><Strong>Author </Strong>${ele.author}</div>
   <div><Strong>Content </Strong>${ele.content}</div>
   <italic>Published Date Of Upload</italic>${ele.date}
   </div>
   <div class='btn_list'>
       <input type="checkbox" id="box" />Edit
        <label for="box">
        <form id=${ele.id} class="form-group" action="/update" method="POST">
           <input type="hidden" name="id" value="${ele.id}"/>
           <div class='head'>
               <div>
                   <strong>Title</strong>
                   <input type='text' name='title' value='${ele.title}' placeholder="Title">
               </div>
               <div>
                   <strong>Category</strong>
                   <select name='cat'>
                       <option></option>
                       <option>entertainment</option>
                       <option>technology</option>
                       <option>DSA</option>
                       <option>Web</option>
                       <option>Android</option>
                   </select>
               </div>
               <div>
                   <strong>Email ID</strong>
                   <input name='email' type='email' value='${ele.email}' placeholder="Email">
               </div>
               <div>
                   <strong>Author</strong>
                   <input name='author' type='text' value='${ele.author}' placeholder="Author">
               </div>
           </div>
           <div class="content">
               <strong>Content</strong>
               <textarea name='content' cols='50' rows='5'>${ele.content}
               </textarea>
           </div>

           <button  onclick='update(${ele.id})' type="submit">Save</button>
         </form>
        </label>
   </div>

`
}