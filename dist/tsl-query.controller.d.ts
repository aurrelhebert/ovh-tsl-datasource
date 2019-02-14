/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import { QueryCtrl } from 'app/plugins/sdk';
import Query from './query';
import Labels from './labels';
export default class TslQueryCtrl extends QueryCtrl {
    $scope: any;
    private uiSegmentSrv;
    static templateUrl: string;
    target: {
        friendlyQuery: Query;
        hide: boolean;
        expr: string;
    };
    changeTicker: any;
    staticQuery: Query;
    extraLabelKey: string;
    extraLabelValue: string;
    extraComparator: string;
    extraGroupByLabel: string;
    extraFilterLabel: string;
    extraFilterParamMapKey: string;
    extraFilterParamMapValue: string;
    extraOperatorKind: string;
    extraArithmeticParam: number;
    extraArithmeticOperator: string;
    extraEqualityParam: number;
    extraEqualityOperator: string;
    extraLimitParam: number;
    extraLimitOperator: string;
    extraTimeParamDuration: string;
    extraTimeParamNumber: number;
    extraTimeParamEnd: string;
    extraTimeOperator: string;
    extraWindowOperator: string;
    extraWindowAggregator: string;
    extraWindowPre: string;
    extraWindowPost: string;
    extraWindowParamPercentile: number;
    extraWindowParamJoin: string;
    extraTransformOperator: string;
    extraTransformQuantizeLabel: string;
    extraTransformQuantizeStep: string;
    extraTransformQuantizeChunk: string;
    extraTransformParam: string;
    extraSortsOperator: string;
    extraSortsParamNumber: number;
    extraSortsParamAggregator: string;
    extraSortsParamPercentile: number;
    extraMetaParam: string;
    extraMetaParamRegexpValue: string;
    extraMetaParamNewValue: string;
    extraMetaParamRemoveLabels: string[];
    extraMetaOperator: string;
    extraMetaParamComparator: string;
    extraRemoveLabelsLabel: string;
    extraMetalabels: Labels[];
    extraMetaLabelKey: string;
    extraMetaLabelComparator: string;
    extraMetaLabelValue: string;
    readOnly: boolean;
    constructor($scope: any, uiSegmentSrv: any, $injector: any);
    _addLabel(): void;
    _delLabel(index: any): void;
    _addGroupByLabel(): void;
    _delGroupByLabel(label: any): void;
    _buildQuery(): void;
    getCompleter(...o: any[]): void;
    toggleEditorMode(): void;
    onChangeInternal: () => void;
    _addArithmeticOperator(): void;
    _addEqualityOperator(): void;
    _addLimitOperator(): void;
    _addTimeOperator(): void;
    _addWindowOperator(): void;
    _addTransformOperator(): void;
    _addSortsOperator(): void;
    _addMetaOperator(): void;
    _addFilterByLabelsOperator(): void;
    _addRemoveLabelsLabel(): void;
    _delRemoveLabelsLabel(label: any): void;
    _delOperator(index: any): void;
    _mvOperatorDown(index: any): void;
    _mvOperatorUp(index: any): void;
    _addMetaLabel(): void;
    _delMetaLabel(index: number): void;
}
