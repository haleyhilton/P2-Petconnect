
    const all = "all"
    console.log("im scary terry");
    const filterFormHandler = (event) => {
        event.preventDefault();
        
      const breed = document.querySelector('#breed-main').value.trim();
    
       const call = `/results/${all}-${breed}-${all}-${all}-${all}`;
       console.log(call);
    
       document.location.assign(call);
    };
    
    /* document.querySelector('#filter-submit').addEventListener('submit', function(event) {
        event.preventDefault();
    }); */
    
    document.querySelector('.search-item').addEventListener('submit', filterFormHandler);
    
    
