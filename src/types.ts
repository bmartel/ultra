export type ImportMap = { imports: Record<string, string> };

export type Navigate = (to: string, opts?: { replace?: boolean }) => void;

export type Config = {
  importMap?: string;
};

type Context = {
  request: Request;
  response: {
    body: string | ReadableStream<Uint8Array>;
    type: string;
  };
};

export type TransformOptions = {
  source: string;
  sourceUrl: URL;
  importMap: ImportMap;
  minify?: boolean;
  relativePrefix?: string;
};

export type Ultraloader = {
  importMap: ImportMap;
};

export type RenderOptions = {
  request: Request;
  importMap: ImportMap;
  url: URL;
  lang: string;
  disableStreaming?: boolean;
};

export type APIHandler = (request: Request) => Response | Promise<Response>;

export type Cache = Map<unknown, unknown>;
