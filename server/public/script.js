const sixContainer = document.querySelector('grid-container-6')
const userImage = document.querySelector('.user-img')
const userName = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Bronica Glover',
        position: 'Lead Partner',
        photo: 'https://www.thinktankclt.org/uploads/1/3/2/5/132535819/bronica_orig.jpg'
       
    },

    {
        name: 'A.W. Burgess',
        position: 'Thinker (2021)',
        photo: 'https://www.thinktankclt.org/uploads/1/3/2/5/132535819/aw-6_orig.jpg'
       
    },

    {
        name: 'Beverly Knox-Davis',
        position: 'Thinker (2021)', 
        photo: 'https://www.thinktankclt.org/uploads/1/3/2/5/132535819/beverly-knox-davis_orig.jpg '
    },

    {
        name: 'Ebony Morman',
        position: 'Thinker (2021)',
        photo: 'https://www.thinktankclt.org/uploads/1/3/2/5/132535819/ebonym-headshot_orig.jpg',
        
    },


    {
        name: 'Erlene Lyde',
        position: 'Thinker (2021)',
        photo: 'https://www.thinktankclt.org/uploads/1/3/2/5/132535819/erlene-lyde_orig.jpg',
        
    },

    {
        name: 'Glennis Davis',
        position: 'Jr. Project Leader',
        photo: 'https://www.thinktankclt.org/uploads/1/3/2/5/132535819/published/glennis-davis.jpg?1643090205',
       
    },

    {
        name: 'Marcus Kornegay',
        position: 'Thinker (2020)',
        photo: 'https://www.thinktankclt.org/uploads/1/3/2/5/132535819/markus-kornegay_orig.jpg',
        
    },

    {
        name:'Tarik Kiley',
        position: 'Jr. Project Leader (2019)',
        photo: 'https://www.thinktankclt.org/uploads/1/3/2/5/132535819/tarik-kiley_orig.jpg',
        
    },

    {
        name: 'Tim Hurley',
        position: 'Lead Partner',
        photo: 'https://www.thinktankclt.org/uploads/1/3/2/5/132535819/tim-hurley_orig.png',
       
    },

    {
        name: 'Leslye Torrence',
        position: 'Thinker (2021)',
        photo: 'https://www.thinktankclt.org/uploads/1/3/2/5/132535819/published/leslye.jpg?1643091233',
        
    },

    {
        name: 'Dr. Susan Harden',
        position: 'Thinker',
        photo: 'https://www.thinktankclt.org/uploads/1/3/2/5/132535819/susan-harden_orig.jpg',
        
    },

    {
        name: 'Thelma Byers-Bailey',
        position: 'Founding Thinker (2018)',
        photo: 'https://www.thinktankclt.org/uploads/1/3/2/5/132535819/thelma-headshot_orig.png',
        
    },

    {
        name: 'Stepanie Sneed',
        position: 'Project Leader (2018)',
        photo: 'https://www.thinktankclt.org/uploads/1/3/2/5/132535819/stephanie-sneed_orig.jpg',
       
    },

    {
        name: 'Ledayne Mcleese Polaski',
        position: 'Thinker',
        photo: 'https://www.thinktankclt.org/uploads/1/3/2/5/132535819/ledayne_orig.jpg',
        
    },

    
    {
        name: 'Dr. Blanche Penn',
        position: 'Thinker (2018)',
        photo: 'https://www.thinktankclt.org/uploads/1/3/2/5/132535819/blanche_orig.jpg',
       
    },
    

]

let idx = 1

function updateTestimonial() {
    const { name, position, photo } = testimonials[idx]

    
    userImage.src = photo
    userName.innerHTML = name
    role.innerHTML = position

    idx++

    if( idx > testimonials.length -1) {
        idx = 0
    }
    
}

setInterval(updateTestimonial, 10000)



const donate = document.getElementById('donate')
donate.addEventListener("click", () => {
    fetch("/create-checkout-session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            items: [
                { id: 1, quantity: 1 },
                { id: 2, quantity: 2 },
            ],
        })
    })


    .then (res => {
        if (res.ok) return res.json()
        return res.json().then (json => Promise.reject(json))
    })
    .then(({ url }) => {
        console.log(url)
       // window.location = url
    })
    .catch(e => {
        console.error(e.error)
    })
})
