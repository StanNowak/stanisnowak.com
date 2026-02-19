
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/cv" | "/publications";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/cv": Record<string, never>;
			"/publications": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/cv" | "/publications";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/Portrait.jpeg" | "/StanNowakCV.pdf" | "/Thumbnails/.DS_Store" | "/Thumbnails/ASCR.png" | "/Thumbnails/BELIV18.png" | "/Thumbnails/CGA23.png" | "/Thumbnails/Frontier21.jpeg" | "/Thumbnails/GI22.png" | "/Thumbnails/ISSW18.png" | "/Thumbnails/ISSW23.png" | "/Thumbnails/ISSW23avid.png" | "/Thumbnails/ISSW23handoff.png" | "/Thumbnails/ISSW23problem.png" | "/Thumbnails/NHESS20.png" | "/Thumbnails/Thesis23.png" | "/Thumbnails/Viz23.png" | "/Thumbnails/VizShort20.png" | "/favicon.png" | string & {};
	}
}