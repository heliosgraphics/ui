System.register(["angular2/core", "../../shared/services/options.service", "../../shared/pipes/MapToIterable"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, options_service_1, MapToIterable_1;
    var DocsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (options_service_1_1) {
                options_service_1 = options_service_1_1;
            },
            function (MapToIterable_1_1) {
                MapToIterable_1 = MapToIterable_1_1;
            }],
        execute: function() {
            DocsComponent = (function () {
                function DocsComponent(OptionsService) {
                    this.OptionsService = OptionsService;
                    this.fracturesArray = [];
                    this.fracturesArray = this.OptionsService.blocks;
                    console.log(this.fracturesArray);
                }
                DocsComponent = __decorate([
                    core_1.Component({
                        selector: "docs",
                        pipes: [MapToIterable_1.MapToIterable],
                        styleUrls: ["app/components/docs/docs.component.css"],
                        templateUrl: "app/components/docs/docs.component.html"
                    }), 
                    __metadata('design:paramtypes', [options_service_1.OptionsService])
                ], DocsComponent);
                return DocsComponent;
            }());
            exports_1("DocsComponent", DocsComponent);
        }
    }
});
