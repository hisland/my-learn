const status = await Deno.permissions.query({ name: 'read', path: './temp/aa.js' })
console.log(status)
