export default function devieReducer(state={}){
	let isMobile = state.isMobile=== 'false'? false:true;

	return Object.assign({},state,{isMobile});
}