import { parseIntPipe } from './parse-int-pipe/parse-int-pipe';
import { deprecatedApiModules } from './deprecated-api-modules/deprecated-api-modules';
import { useDependencyInjection } from './use-dependency-injection/use-dependency-injection';

export const rules = {
    'parse-int-pipe': parseIntPipe,
    'deprecated-api-modules': deprecatedApiModules,
    'use-dependency-injection': useDependencyInjection,
};

export const configs = {
    recommended: {
        rules: {
            'nestjs/parse-int-pipe': 1,
            'nestjs/deprecated-api-modules': 1,
            'nestjs/use-dependency-injection': 1,
        }
    }
};
