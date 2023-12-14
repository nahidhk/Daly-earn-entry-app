# Daly Earn Entry App
In this app you can keep your daily income data.
To enter here you need to enter with a login password.
Maybe I'll give you a better idea of ​​how to use it below
You must enter a password through the promoter to propose. 
The password is probably now kept as a demo. You can change it if you want.
	---
## How to chenge password
> The Password is a change a oppen
> `load.json` in edit json file
> ` "password":"your password"` .
The change Password a web site all page change
---
# Editor The Code in app
There are many changes in the app just for you. 
If you want to use it you have to make some changes the developer has done for himself so no changes are required.
You can change this in several ways. The codes have to be changed as I will show you in the example.
	---
### For example you want to edit monthly list and Edit weekly or monthly
---
* how to edit the monthly page
   - > open in the `monthly/index.html line:20` to edit set a `selecetd` plus
* Edit server php file
    - > open in the `server.php` file and your open a any plus server side program to het open
    - > edit exampule > `line: 18: $jsonData = file_get_contents('00-0000.json');`
      >  and
    - > edit exampule > `line: 25: file_put_contents('00-0000.json', json_encode($existingData));`
 * how to change a mantly auto secelect[`index.html`]
    - > open in the `index.html`
    - > edit exampule > `line: 12: <select oninput="app()" class="select" id="month">` and `<option selected>12</option>`
      >  the tag is a you edit need!
	---
  # live Preview 
  [https://www.account.nahidhk.info/demo](https://account.nahidhk.info/demo)
  Password `admin`

  


> Developed By [Nahid HK](https://www.nahidhk.info)
